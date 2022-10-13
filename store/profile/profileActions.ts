import { AppThunkAction } from "../store";

export interface SetNameAction {
  type: "profile/setname";
  payload: string;
}

export interface SetSavingGoalAction {
  type: "profile/setsaving";
  payload: number;
}

/** Thunk Action creator */
export function setProfileName(name: string): AppThunkAction {
  /** Redux Thunk'en (dvs en funktion och inte ett objekt) */
  return async (dispatch, getState) => {
    dispatch({ type: "profile/setname", payload: name });
    // Set pending state:
    // dispatch({ type: "profile/pending", payload: name });
    // Call API:
    // const response = await fetch('/api/profile/name');
    // If error then dispatch fail else dispatch success;
  };
}
