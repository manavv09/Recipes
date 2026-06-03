/**
 * useAuth — Firebase authentication hook.
 *
 * Manages anonymous sign-in on mount. Exports user state and sign-out.
 * When Firebase is not configured, returns a null user without error.
 */

import { useState, useEffect } from 'react';
import {
  signInAnonymously,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
  linkWithPopup,
  type User
} from 'firebase/auth';
import { auth, isFirebaseReady } from '@/services/firebase';
import { migrateLocalStorageToFirestore } from '@/services/firestoreSync';

export type SyncStatus = 'unconfigured' | 'connecting' | 'synced' | 'offline';

interface UseAuthReturn {
  user: User | null;
  syncStatus: SyncStatus;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>(
    isFirebaseReady ? 'connecting' : 'unconfigured'
  );

  useEffect(() => {
    if (!isFirebaseReady || !auth) {
      setSyncStatus('unconfigured');
      return;
    }

    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setSyncStatus('synced');
        // Run one-time migration on first authenticated session
        await migrateLocalStorageToFirestore(firebaseUser.uid);
      } else {
        // No user — sign in anonymously
        try {
          setSyncStatus('connecting');
          if (auth) await signInAnonymously(auth);
        } catch (err) {
          console.warn('[RecipeForge] Anonymous sign-in failed:', err);
          setSyncStatus('offline');
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    if (!isFirebaseReady || !auth) return;

    const provider = new GoogleAuthProvider();
    try {
      setSyncStatus('connecting');
      if (auth.currentUser && auth.currentUser.isAnonymous) {
        // Upgrade the anonymous user to a Google user by linking
        try {
          const result = await linkWithPopup(auth.currentUser, provider);
          setUser(result.user);
          setSyncStatus('synced');
          console.info('[RecipeForge] Anonymous account successfully linked to Google');
          return;
        } catch (linkErr: any) {
          // If the Google account is already linked/associated with another user,
          // we fallback to direct sign-in.
          if (linkErr.code === 'auth/credential-already-in-use') {
            console.info('[RecipeForge] Google account already exists, signing in directly...');
          } else {
            throw linkErr;
          }
        }
      }
      
      // Direct sign-in if no anonymous user or if linking was not possible
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setSyncStatus('synced');
    } catch (err) {
      console.error('[RecipeForge] Google sign-in failed:', err);
      // Re-evaluate sync status based on whether we still have a user
      setSyncStatus(auth.currentUser ? 'synced' : 'offline');
    }
  };

  const signOut = async () => {
    if (auth) {
      await firebaseSignOut(auth);
      setUser(null);
      setSyncStatus('unconfigured');
    }
  };

  return { user, syncStatus, signInWithGoogle, signOut };
}
