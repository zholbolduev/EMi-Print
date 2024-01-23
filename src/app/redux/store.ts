// rootReducer.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../../features/AuthFeatures/LoginFeature/LoginFeatureSlice";
import registerReducer from "../../features/AuthFeatures/RegisterFeature/RegisterFeatureSlice";
import pictureProductReducer from "../../pages/admin/PictureProductPage/PictureProductPageSlice";
import ReadySolutionProductPageSlice from "../../pages/admin/ReadySolutionProductPage/ReadySolutionProductPageSlice";
import createPictureReducer from "../../pages/admin/CreateReadySolutionPage/CreateReadySolutionPageSlice";
import createReadySolutionSlice from "../../pages/admin/CreateReadySolutionPage/CreateReadySolutionPageSlice";

export const rootReducers = combineReducers({
  registerReducer,
  loginReducer,
  pictureProductReducer,
  createPictureReducer,
  readySolutionProductPageSlice: ReadySolutionProductPageSlice,
  createReadySolutionSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
