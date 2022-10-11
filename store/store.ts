import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { bankReducer } from "./bankReducer";

const rootReducer = combineReducers({
  bank: bankReducer,
  // profile: profileReducer,
});

export const store = createStore(rootReducer);

// Make sure we use strong typings when working with our store
type AppState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// Wrap build in hooks with our typings
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
