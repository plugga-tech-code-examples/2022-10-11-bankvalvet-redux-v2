export interface ProfileState {
  name: string;
  savingsGoal: number;
}

export const initialState: ProfileState = {
  name: "",
  savingsGoal: 0,
};
