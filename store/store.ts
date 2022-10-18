import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bankReducer } from "./bankSlice";
import { profileReducer } from "./profileSlice";

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    profile: profileReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
