/**
 * useCloudSync — unified save/load hook.
 *
 * Wraps firestoreSync helpers. When no Firebase user is present,
 * falls back to localStorage transparently.
 */

import { useCallback } from 'react';
import { saveToFirestore, loadFromFirestore } from '@/services/firestoreSync';
import type { User } from 'firebase/auth';

interface UseCloudSyncReturn {
  saveToCloud: (key: string, value: unknown) => Promise<void>;
  loadFromCloud: <T>(key: string, fallback: T) => Promise<T>;
}

export function useCloudSync(user: User | null): UseCloudSyncReturn {
  const saveToCloud = useCallback(
    async (key: string, value: unknown) => {
      if (user) {
        await saveToFirestore(user.uid, key, value);
      } else {
        // No Firebase user — persist to localStorage only
        localStorage.setItem(key, JSON.stringify(value));
      }
    },
    [user]
  );

  const loadFromCloud = useCallback(
    async <T>(key: string, fallback: T): Promise<T> => {
      if (user) {
        return loadFromFirestore<T>(user.uid, key, fallback);
      }
      // No Firebase user — read from localStorage
      const raw = localStorage.getItem(key);
      if (raw !== null) {
        try { return JSON.parse(raw) as T; } catch { /* ignore */ }
      }
      return fallback;
    },
    [user]
  );

  return { saveToCloud, loadFromCloud };
}
