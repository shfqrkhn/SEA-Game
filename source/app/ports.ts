// Thin adapters for effects (MPES §5.2). The domain never touches these directly.

export interface StoragePort {
  /** One cached probe per load; restores any prior value under the probe key. */
  available(): boolean;
  read(key: string): { ok: true; raw: string | null } | { ok: false };
  /** Writes only when the value changed. Returns false on any failure (quota, denied, missing). */
  write(key: string, raw: string): boolean;
  /** Removes the key. Returns false on any failure. */
  remove(key: string): boolean;
}

export function sessionStoragePort(access: () => Storage = () => window.sessionStorage): StoragePort {
  let availability: boolean | undefined;
  return {
    available() {
      if (availability !== undefined) return availability;
      try {
        const storage = access(), probe = '__sea_probe', previous = storage.getItem(probe);
        storage.setItem(probe, '1');
        if (previous === null) storage.removeItem(probe); else storage.setItem(probe, previous);
        availability = true;
      } catch {
        availability = false;
      }
      return availability;
    },
    read(key) {
      try { return { ok: true, raw: access().getItem(key) }; } catch { availability = false; return { ok: false }; }
    },
    write(key, raw) {
      try {
        const storage = access();
        if (storage.getItem(key) !== raw) storage.setItem(key, raw);
        availability = true;
        return true;
      } catch {
        availability = false;
        return false;
      }
    },
    remove(key) {
      try {
        access().removeItem(key);
        return true;
      } catch {
        availability = false;
        return false;
      }
    },
  };
}

export function memoryStoragePort(): StoragePort & { data: Map<string, string> } {
  const data = new Map<string, string>();
  return {
    data,
    available: () => true,
    read: key => ({ ok: true, raw: data.get(key) ?? null }),
    write: (key, raw) => { data.set(key, raw); return true; },
    remove: key => { data.delete(key); return true; },
  };
}

export type Clock = () => number;
export const systemClock: Clock = () => Date.now();

/** Uppercase hexadecimal from cryptographic randomness. */
export function randomHex(characters: number): string {
  const bytes = new Uint8Array(Math.ceil(characters / 2));
  crypto.getRandomValues(bytes);
  return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('').slice(0, characters).toUpperCase();
}

/** Ask the browser to save a text file. Returns false if the browser refused synchronously. */
export function downloadText(filename: string, text: string): boolean {
  try {
    const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30_000);
    return true;
  } catch {
    return false;
  }
}

export function timestamp(date: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}${p(date.getMonth() + 1)}${p(date.getDate())}-${p(date.getHours())}${p(date.getMinutes())}`;
}
