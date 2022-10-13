import { SetNameAction, SetSavingGoalAction } from "./profileActions";
import { initialState, ProfileState } from "./profileState";

type KnownAction = SetNameAction | SetSavingGoalAction;

export function profileReducer(state = initialState, action: KnownAction): ProfileState {
  switch (action.type) {
    case "profile/setname":
      return { ...state, name: action.payload };
    case "profile/setsaving":
      return { ...state, savingsGoal: action.payload };
    default:
      return state;
  }
}
