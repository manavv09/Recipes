/**
 * Firebase service initialization.
 *
 * Reads all config from VITE_FIREBASE_* environment variables.
 * Exports null values when config is missing — all callers must handle this.
 */

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAuth, type Auth } from 'firebase/auth';

function isFirebaseConfigured(): boolean {
  return !!(
    import.meta.env.VITE_FIREBASE_API_KEY &&
    import.meta.env.VITE_FIREBASE_PROJECT_ID &&
    import.meta.env.VITE_FIREBASE_APP_ID
  );
}

let app: FirebaseApp | null = null;
let firestoreDb: Firestore | null = null;
let firebaseAuth: Auth | null = null;

if (isFirebaseConfigured()) {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

  // Avoid re-initializing if HMR reloads the module
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  firestoreDb = getFirestore(app);
  firebaseAuth = getAuth(app);
}

export { app, firestoreDb as db, firebaseAuth as auth };
export const isFirebaseReady = isFirebaseConfigured();
