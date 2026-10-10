// One state owner per role (R-ARCH-2, R-ARCH-3): every change is a pure command whose complete
// result is validated before it is committed, saved and rendered. A rejected command changes nothing.
import { DomainError, type ErrorCode } from '../domain/errors.ts';
import type { StoragePort } from './ports.ts';

export type Result = { readonly ok: true } | { readonly ok: false; readonly code: ErrorCode };

export interface ControllerOptions<S> {
  readonly key: string;
  readonly storage: StoragePort;
  /** Full validation of a state that will be saved (throws on any invariant breach). */
  readonly validate: (state: S) => void;
  /** What to persist; null means "do not save" (for example the empty setup shell). */
  readonly serialize: (state: S) => string | null;
}

export class Controller<S> {
  #state: S;
  #revision = 0;
  #listeners = new Set<() => void>();
  #saveFailed = false;
  /** True once storage holds a save written for this role, so a reset may clear it (never foreign data). */
  #persisted: boolean;
  readonly options: ControllerOptions<S>;

  constructor(initial: S, options: ControllerOptions<S>) {
    this.#state = initial;
    this.options = options;
    this.#persisted = options.serialize(initial) !== null;
  }

  get state(): S { return this.#state; }
  /** Increments on every committed change; confirmations compare it to refuse stale actions. */
  get revision(): number { return this.#revision; }
  get saveFailed(): boolean { return this.#saveFailed; }

  subscribe(listener: () => void): () => void {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  dispatch(command: (state: S) => S): Result {
    let next: S;
    try {
      next = command(this.#state);
      if (next === this.#state) return { ok: true };
      this.options.validate(next);
    } catch (error) {
      if (error instanceof DomainError) return { ok: false, code: error.code };
      console.error(error);
      return { ok: false, code: 'invalid-state' };
    }
    this.replace(next);
    return { ok: true };
  }

  /** Commit an already validated state (import, reset) and persist it. */
  replace(next: S): void {
    this.#state = next;
    this.#revision++;
    this.save();
    for (const listener of this.#listeners) listener();
  }

  save(): void {
    const raw = this.options.serialize(this.#state);
    if (raw === null) {
      // A deliberate reset or an undone import: clear our save so a reload does not bring the old game back.
      if (this.#persisted) { this.#saveFailed = !this.options.storage.remove(this.options.key); this.#persisted = this.#saveFailed; }
      return;
    }
    this.#saveFailed = !this.options.storage.write(this.options.key, raw);
    this.#persisted = true;
  }
}
