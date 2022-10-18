import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BankState {
  balance: number;
  transactions: number[];
}

const initialState: BankState = {
  balance: 0,
  transactions: [],
};

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    deposit(state, action: PayloadAction<number>) {
      state.balance += action.payload;
      state.transactions.push(action.payload);
    },
    withdrawal(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
      state.transactions.push(-action.payload);
    },
  },
});

export const { deposit, withdrawal } = bankSlice.actions;
export const bankReducer = bankSlice.reducer;
