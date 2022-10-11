interface BankState {
  balance: number;
}

const initialState: BankState = {
  balance: 100,
};

interface WithdrawalAction {
  type: "bank/withdrawal";
  payload: number;
}
interface DepositAction {
  type: "bank/deposit";
  payload: number;
}

type KnownAction = WithdrawalAction | DepositAction;

export function bankReducer(state = initialState, action: KnownAction): BankState {
  switch (action.type) {
    case "bank/withdrawal":
      return { ...state, balance: state.balance - action.payload };
    case "bank/deposit":
      return { ...state, balance: state.balance + action.payload };
    default:
      return state;
  }
}
