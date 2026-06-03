/**
 * Firestore sync helpers.
 *
 * Provides save/load primitives keyed per authenticated user.
 * Falls back to localStorage silently when Firestore is unavailable.
 */

import {
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch
} from 'firebase/firestore';
import { db, isFirebaseReady } from './firebase';

const LOCAL_STORAGE_KEYS = [
  'recipeforge_tab',
  'recipeforge_theme',
  'recipeforge_diet',
  'recipeforge_customrecipes',
  'recipeforge_favorites',
  'recipeforge_gymgoal',
  'recipeforge_mealplan',
  'recipeforge_customshopping',
  'recipeforge_checkeditems'
] as const;

/** Save a value to Firestore for a given user. Falls back to localStorage. */
export async function saveToFirestore(uid: string, key: string, value: unknown): Promise<void> {
  if (!isFirebaseReady || !db) {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  }

  try {
    const ref = doc(db, 'users', uid, 'data', key);
    await setDoc(ref, { value, updatedAt: Date.now() });
    // Keep localStorage in sync as a cache
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn('[RecipeForge] Firestore write failed, falling back to localStorage:', err);
    localStorage.setItem(key, JSON.stringify(value));
  }
}

/** Load a value from Firestore, falling back to localStorage. */
export async function loadFromFirestore<T>(
  uid: string,
  key: string,
  fallback: T
): Promise<T> {
  if (!isFirebaseReady || !db) {
    const cached = localStorage.getItem(key);
    if (cached) {
      try { return JSON.parse(cached) as T; } catch { /* ignore */ }
    }
    return fallback;
  }

  try {
    const ref = doc(db, 'users', uid, 'data', key);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data = snap.data().value as T;
      // Update local cache
      localStorage.setItem(key, JSON.stringify(data));
      return data;
    }
    // Firestore has no data yet — fall back to localStorage
    const cached = localStorage.getItem(key);
    if (cached) {
      try { return JSON.parse(cached) as T; } catch { /* ignore */ }
    }
  } catch (err) {
    console.warn('[RecipeForge] Firestore read failed, using localStorage:', err);
    const cached = localStorage.getItem(key);
    if (cached) {
      try { return JSON.parse(cached) as T; } catch { /* ignore */ }
    }
  }

  return fallback;
}

/**
 * One-time migration: copy all existing localStorage data into Firestore.
 * Called on first authenticated session.
 */
export async function migrateLocalStorageToFirestore(uid: string): Promise<void> {
  if (!isFirebaseReady || !db) return;

  const migrationFlagKey = `recipeforge_migrated_${uid}`;
  if (localStorage.getItem(migrationFlagKey)) return; // already done

  try {
    const batch = writeBatch(db);
    const dataCollection = collection(db, 'users', uid, 'data');

    for (const key of LOCAL_STORAGE_KEYS) {
      const raw = localStorage.getItem(key);
      if (raw !== null) {
        let value: unknown;
        try { value = JSON.parse(raw); } catch { value = raw; }
        const ref = doc(dataCollection, key);
        batch.set(ref, { value, updatedAt: Date.now(), migratedFrom: 'localStorage' });
      }
    }

    await batch.commit();
    localStorage.setItem(migrationFlagKey, '1');
    console.info('[RecipeForge] localStorage → Firestore migration complete for user', uid);
  } catch (err) {
    console.warn('[RecipeForge] Migration failed, will retry on next load:', err);
  }
}
