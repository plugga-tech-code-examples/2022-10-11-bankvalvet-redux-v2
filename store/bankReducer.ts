interface BankState {
  balance: number;
}

const initialState: BankState = {
  balance: 0,
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
  return state;
}
