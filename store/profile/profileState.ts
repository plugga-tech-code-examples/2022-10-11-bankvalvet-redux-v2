export interface ProfileState {
  name: string;
  savingsGoal: number;
}

export const initialState: ProfileState = {
  name: "David",
  savingsGoal: 2000,
};
