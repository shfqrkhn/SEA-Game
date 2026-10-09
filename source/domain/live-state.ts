import { passiveSnapshot } from './recovery';
import { validateInstructorSave, validateStudentSave, type InstructorSave, type StudentSave } from './role-saves';
import { invalidState, validateTeamSnapshot } from './teams';

export type LiveInstructor = Omit<InstructorSave, 'privateEntry'> & { readonly privateEntry: boolean };

/** Commands reject inconsistent live aggregates; recovery alone may reconstruct them. */
export function instructorLiveSnapshot(raw: unknown): LiveInstructor {
  const input = passiveSnapshot(raw) as Record<string, unknown>;
  if (!input || typeof input !== 'object' || Array.isArray(input) || !Array.isArray(input.teams)) return invalidState();
  for (const team of input.teams) validateTeamSnapshot(team);
  if (input.privateEntry !== undefined && typeof input.privateEntry !== 'boolean') return invalidState();
  return { ...validateInstructorSave(input), privateEntry: input.privateEntry === true };
}

export function studentLiveSnapshot(raw: unknown): StudentSave {
  const input = passiveSnapshot(raw) as Record<string, unknown>;
  if (!input || typeof input !== 'object' || Array.isArray(input)) return invalidState();
  validateTeamSnapshot(input.team);
  if (input.currentCard !== null) {
    const card = input.currentCard;
    if (!card || typeof card !== 'object' || Array.isArray(card) || typeof input.round !== 'number' || typeof input.lot !== 'number') return invalidState();
    const at = card as Record<string, unknown>;
    if (at.round !== input.round + 1 || at.lot !== input.lot + 1) return invalidState();
  }
  return validateStudentSave(input);
}
