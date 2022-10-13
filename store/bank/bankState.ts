export interface BankState {
  balance: number;
  transactions: number[];
}

export const initialState: BankState = {
  balance: 0,
  transactions: [],
};
