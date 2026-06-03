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
  type User
} from 'firebase/auth';
import { auth, isFirebaseReady } from '@/services/firebase';
import { migrateLocalStorageToFirestore } from '@/services/firestoreSync';

export type SyncStatus = 'unconfigured' | 'connecting' | 'synced' | 'offline';

interface UseAuthReturn {
  user: User | null;
  syncStatus: SyncStatus;
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

  const signOut = async () => {
    if (auth) {
      await firebaseSignOut(auth);
      setUser(null);
      setSyncStatus('unconfigured');
    }
  };

  return { user, syncStatus, signOut };
}
