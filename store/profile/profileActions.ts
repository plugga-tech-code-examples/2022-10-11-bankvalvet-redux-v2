export interface SetNameAction {
  type: "profile/setname";
  payload: string;
}

export interface SetSavingGoalAction {
  type: "profile/setsaving";
  payload: number;
}
