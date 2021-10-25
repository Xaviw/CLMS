export enum LabStatus {
  open,
  close,
  repair,
}

export enum ApplicationType {
  lab,
  shop,
  repair,
}

export enum NormalStatus {
  pendingReview,
  pass,
  fail,
  done,
  undone,
  cancel,
}

export enum RepairStatus {
  committed,
  underRepair,
  done,
  cancel,
}
