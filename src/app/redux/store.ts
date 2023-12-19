"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../../features/AuthFeatures/LoginFeature/LoginFeatureSlice";
import registerReducer from "../../features/AuthFeatures/RegisterFeature/RegisterFeatureSlice";

export const rootReducers = combineReducers({
  registerReducer,
  loginReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
