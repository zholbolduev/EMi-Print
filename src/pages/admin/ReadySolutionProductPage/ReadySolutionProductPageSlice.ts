// ReadySolutionProductPageSlice.ts

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFetch } from "../../../shared/types";

const initialState: IFetch = {
  loading: false,
  data: [],
  error: "",
};

export interface IProduct {
  id: number;
  title: string;
  price: number;
  isAvailabel: boolean;
}

export const ReadySolutionProductPageSlice = createSlice({
  name: "ReadySolutionProductPageSlice",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setData(state, action: PayloadAction<IProduct[]>) {
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

export default ReadySolutionProductPageSlice.reducer;
