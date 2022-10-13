export interface ProfileState {
  name: string;
  savingsGoal: number;
  pending: boolean;
  error: string;
}

export const initialState: ProfileState = {
  name: "David",
  savingsGoal: 2000,
  pending: false,
  error: "",
};
