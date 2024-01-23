// PictureProductPageAction.ts

import axios from "axios";
import { baseAPI } from "../../../shared/baseAPI";
import { AppDispatch } from "../../../app/redux/store";
import PictureProductPageSlice, { IProduct } from "./PictureProductPageSlice";

export const PictureProductPageAction = {
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
      dispatch(PictureProductPageSlice.actions.setLoading()); // Добавьте эту строку

      const response = await axios.get<IProduct[]>(
        `${baseAPI}/admin/get/products`
      );

      dispatch(PictureProductPageSlice.actions.setData(response.data));
    } catch (error: any) {
      dispatch(PictureProductPageSlice.actions.setError(error.message));
    }
  },
};
