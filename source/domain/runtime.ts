// Production surface consumed by legacy-compatible adapters during the rebuild.
export { parseAmount, parseWholeDollars, parsePercentBps, addCents, profitFromBps } from './money';
export { missionScore, MISSIONS, MISSION_IDS } from './missions';
export { CARDS, ROUND_SLOTS } from './catalog';
export { awardComparator, exactAwardTie, awardEligible } from './awards';
export { cardForSlot } from './catalog';
export { createTeams, normalizeTeam, validateTeamSnapshot, canonicalPurchaseReference } from './teams';
export { acquirePurchase, removePurchase } from './transactions';
export { PHASES, parseSessionCode, validateBase, instructorPhaseAllowed, studentPhaseAllowed, studentAuctionStartAllowed, auctionVisible, canWin } from './session';
export { BACKUP_FORMAT, BACKUP_VERSION, MAX_BACKUP_CHARS, MAX_BACKUP_BYTES, makeBackup, parseBackup, createRecoveryStore } from './recovery';
export { marketFromSeed } from './market';
export { validateInstructorSave, validateStudentSave, MAX_INSTRUCTOR_LEDGER_ENTRIES } from './role-saves';
export { instructorCommitSale, instructorCommitUnsold, instructorVoidCurrent, studentRecordWin, ledgerHasCapacity } from './commands';
export { instructorGenerateSession, studentJoinSession, instructorSelectMission, studentSelectMission, studentConfirmVehicle, studentSetPlanningText, studentSetMaxWtp, instructorPracticeCommand, studentPracticeCommand, instructorStartAuction, studentStartAuction } from './setup-commands';
export { instructorRevealAuction, instructorOpenAuction, instructorAcceptBid, instructorPauseAuction, instructorResumeAuction, instructorExtendAuction, instructorAdvanceAuction, instructorAuctionStatus } from './auction-controls';
export { studentLoadAnnouncedCard, studentSetManualPosition, studentAdvanceLocal, studentPrepareAuctionFinish, studentFinishAuction, studentOpenSubmit, studentEditProfitInput, studentCalculateProfit, studentChangeProfitMode, studentFinishSubmit, studentClose } from './student-controls';
export { instructorOpenSubmissions, instructorAuthorizePrivateEntry, instructorSetProfit, instructorSetSubmitted, instructorCloseSubmissions, instructorCloseRoom, studentEditScratch, studentAddMissingPurchase, studentRemoveReconciledPurchase } from './edit-commands';
export { instructorPrepareClosedReset, studentPrepareClosedReset, instructorPrepareRestore, studentPrepareRestore, instructorRestoreFingerprint, studentRestoreFingerprint } from './restore-commands';
