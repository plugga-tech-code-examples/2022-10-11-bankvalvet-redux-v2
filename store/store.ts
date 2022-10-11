import { createStore } from "redux";
import { bankReducer } from "./bankReducer";

export const store = createStore(bankReducer);
