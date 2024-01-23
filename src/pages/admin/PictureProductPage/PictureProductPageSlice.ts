// PictureProductPageSlice.ts

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
  price_with_text: number;
  isAvailable: boolean;
}

export const PictureProductPageSlice = createSlice({
  name: "PictureProductPageSlice",
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

export default PictureProductPageSlice.reducer;
