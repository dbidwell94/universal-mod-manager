import { configureStore, combineReducers } from "@reduxjs/toolkit";
import gameReducer from "./gameReducer";

export function createStore() {
  return configureStore({
    reducer: combineReducers({ gameReducer: gameReducer.reducer }),
  });
}

export default createStore();
