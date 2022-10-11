import { AppState } from "./store";

export const selectBank = (state: AppState) => state.bank;
export const selectBalance = (state: AppState) => selectBank(state).balance;
export const selectTranscations = (state: AppState) => selectBank(state).transactions;
