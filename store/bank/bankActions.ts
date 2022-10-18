interface WithdrawalAction {
  type: "bank/withdrawal";
  payload: number;
}
interface DepositAction {
  type: "bank/deposit";
  payload: number;
}

export type BankAction = WithdrawalAction | DepositAction;
