// CreateGiftCardPageSlice.ts

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFetch } from "../../../shared/types";

const initialState: IFetch = {
  loading: false,
  data: [],
  error: "",
  success: "",
};

export const CreateGiftCardPageSlice = createSlice({
  name: "createGiftCardSlice",
  initialState,
  reducers: {
    setIsLoading(state) {
      state.loading = true;
    },
    setSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = "";
      state.success = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default CreateGiftCardPageSlice.reducer;
