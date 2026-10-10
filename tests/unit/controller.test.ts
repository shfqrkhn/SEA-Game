// R-ARCH-2 and MPES §8.1/§8.7: the controller persists every committed state, including a deliberate reset.
import { describe, expect, it } from 'vitest';
import { Controller } from '../../source/app/controller.ts';
import { memoryStoragePort } from '../../source/app/ports.ts';

interface Toy { readonly code: string | null; readonly n: number }
const KEY = 'TOY';

function controller(initial: Toy, storage = memoryStoragePort()) {
  return {
    storage,
    c: new Controller<Toy>(initial, {
      key: KEY, storage, validate: () => undefined,
      serialize: state => state.code === null ? null : JSON.stringify(state),
    }),
  };
}

describe('Controller persistence', () => {
  it('saves each committed change', () => {
    const { c, storage } = controller({ code: null, n: 0 });
    c.dispatch(() => ({ code: 'A', n: 1 }));
    expect(storage.data.get(KEY)).toBe('{"code":"A","n":1}');
  });

  it('a reset to an unsaved shell clears the save, so a reload does not restore the old session', () => {
    const { c, storage } = controller({ code: null, n: 0 });
    c.dispatch(() => ({ code: 'A', n: 1 }));
    c.replace({ code: null, n: 0 });
    expect(storage.data.has(KEY)).toBe(false);
  });

  it('restoring from a loaded save and then resetting also clears it', () => {
    const storage = memoryStoragePort();
    storage.data.set(KEY, '{"code":"A","n":1}');
    const { c } = controller({ code: 'A', n: 1 }, storage);
    c.dispatch(() => ({ code: null, n: 0 }));
    expect(storage.data.has(KEY)).toBe(false);
  });

  it('never deletes data it did not write (an unreadable save stays for support, §8.7)', () => {
    const storage = memoryStoragePort();
    storage.data.set(KEY, 'unreadable');
    const { c } = controller({ code: null, n: 0 }, storage);
    c.dispatch(state => ({ ...state, n: 1 }));
    expect(storage.data.get(KEY)).toBe('unreadable');
  });

  it('reports a failed removal as a failed save', () => {
    const storage = { ...memoryStoragePort(), remove: () => false };
    const { c } = controller({ code: null, n: 0 }, storage);
    c.dispatch(() => ({ code: 'A', n: 1 }));
    c.replace({ code: null, n: 0 });
    expect(c.saveFailed).toBe(true);
  });
});
