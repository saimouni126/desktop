interface IMergeTreeInProgress {
  readonly kind: 'in-progress'
}

interface IMergeTreeHasConflicts {
  readonly kind: 'conflicts'
  readonly conflicts: number
}

interface IMergeTreeClean {
  readonly kind: 'clean'
}

export type MergeTreeStatus =
  | IMergeTreeInProgress
  | IMergeTreeHasConflicts
  | IMergeTreeClean
