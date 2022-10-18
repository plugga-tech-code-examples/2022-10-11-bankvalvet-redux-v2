import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { app } from "../firebaseConfig";
import { AppState } from "./store";

interface BankState {
  isUpdating: boolean;
  balance: number;
  transactions: number[];
}

const initialState: BankState = {
  isUpdating: false,
  balance: 0,
  transactions: [],
};

export const deposit = createAsyncThunk<number, number, { rejectValue: string; state: AppState }>(
  "bank/deposit",
  async (transaction, { getState }) => {
    const db = getDatabase(app);
    const transactionsRef = ref(db, "bank/transactions");
    const pushRef = push(transactionsRef);
    set(pushRef, transaction);

    const balance = getState().bank.balance + transaction;
    const balanceRef = ref(db, "bank/balance");
    set(balanceRef, balance);

    return transaction;
  }
);

export const withdrawal = createAsyncThunk<
  number,
  number,
  { rejectValue: string; state: AppState }
>("bank/withdrawal", async (transaction, { getState }) => {
  const db = getDatabase(app);
  const reference = ref(db, "bank/transactions");
  const pushRef = push(reference);
  set(pushRef, -transaction);

  const balance = getState().bank.balance - transaction;
  const balanceRef = ref(db, "bank/balance");
  set(balanceRef, balance);

  return transaction;
});

export const listenToBankChanges = createAsyncThunk<void, undefined, { rejectValue: string }>(
  "bank/listenToTransactions",
  async (_, { dispatch }) => {
    const db = getDatabase(app);
    const transcationRef = ref(db, "bank/transactions");
    onValue(transcationRef, (snapshot) => {
      const transaction = (snapshot.val() || {}) as Record<string, number>;
      dispatch(setTransaction(Object.values(transaction)));
    });

    const balanceRef = ref(db, "bank/balance");
    onValue(balanceRef, (snapshot) => {
      const balance = snapshot.val() as number;
      dispatch(setBalance(balance));
    });
  }
);

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      if (!state.isUpdating) {
        state.transactions = action.payload;
      }
    },
    setBalance: (state, action) => {
      if (!state.isUpdating) {
        state.balance = action.payload || 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deposit.pending, (state, action) => {
      state.isUpdating = true;
    });
    builder.addCase(deposit.fulfilled, (state, action) => {
      state.balance += action.payload;
      state.transactions.push(action.payload);
      state.isUpdating = false;
    });

    builder.addCase(withdrawal.pending, (state, action) => {
      state.isUpdating = true;
    });
    builder.addCase(withdrawal.fulfilled, (state, action) => {
      state.balance -= action.payload;
      state.transactions.push(-action.payload);
      state.isUpdating = false;
    });
  },
});

export const { setTransaction, setBalance } = bankSlice.actions;

export const bankReducer = bankSlice.reducer;
