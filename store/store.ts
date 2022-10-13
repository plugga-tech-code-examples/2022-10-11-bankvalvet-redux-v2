import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AnyAction, applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { bankReducer } from "./bank/bankReducer";
import { profileReducer } from "./profile/profileReducer";

const rootReducer = combineReducers({
  bank: bankReducer,
  profile: profileReducer,
});

const thunkMiddleware = applyMiddleware<AppThunkDispatch>(thunk);
export const store = createStore(rootReducer, thunkMiddleware);

// Types to use with our thunks
export type AppThunkDispatch = ThunkDispatch<AppState, unknown, AnyAction>;
export type AppThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  AnyAction
>;

// Make sure we use strong typings when working with our store
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Wrap build in hooks with our typings
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
