import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITokens } from "../types";
import { IFetch } from "../../../shared/types";

const initialState: IFetch = {
  loading: false,
  data: { access: "", refresh: "" },
  error: "",
};

export const NoPasswordFeatureSlice = createSlice({
  name: "NoPasswordFeatureSlice",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setData(state, action: PayloadAction<ITokens>) {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default NoPasswordFeatureSlice.reducer;
