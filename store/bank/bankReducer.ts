import { BankAction } from "./bankActions";
import { BankState, initialState } from "./bankState";

type KnownAction = BankAction;

export function bankReducer(state = initialState, action: KnownAction): BankState {
  switch (action.type) {
    case "bank/withdrawal":
      return {
        ...state,
        balance: state.balance - action.payload,
        transactions: [...state.transactions, -action.payload],
      };
    case "bank/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
}
