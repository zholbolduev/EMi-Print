// OtherProductPageAction.ts

import axios from "axios";
import { baseAPI } from "../../../shared/baseAPI";
import { AppDispatch } from "../../../app/redux/store";
import OtherProductPageSlice, { IProduct } from "./OtherProductPageSlice";

export const OtherProductPageAction = {
  deleteProducts: async (productIds: number[]) => {
    try {
      await axios.delete(`${baseAPI}/admin/products`, {
        data: { ids: productIds },
      });
    } catch (error) {
      console.error("Error deleting products:", error);
      throw error;
    }
  },

  getProducts: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(OtherProductPageSlice.actions.setLoading());

      const response = await axios.get<IProduct[]>(
        `${baseAPI}/admin/get/products`
      );

      dispatch(OtherProductPageSlice.actions.setData(response.data));
    } catch (error: any) {
      dispatch(OtherProductPageSlice.actions.setError(error.message));
    }
  },
};
