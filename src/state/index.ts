import { configureStore, combineReducers } from "@reduxjs/toolkit";

export function createStore() {
  return configureStore({
    reducer: combineReducers({}),
  });
}

export default createStore();