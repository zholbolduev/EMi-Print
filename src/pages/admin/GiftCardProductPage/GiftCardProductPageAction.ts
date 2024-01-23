// GiftCardProductPageAction.ts

import axios from "axios";
import { baseAPI } from "../../../shared/baseAPI";
import { AppDispatch } from "../../../app/redux/store";
import GiftCardProductPageSlice, { IProduct } from "./GiftCardProductPageSlice";

export const GiftCardProductPageAction = {
  deleteProducts: async (productIds: number[]) => {
    try {
      await axios.delete(`${baseAPI}/admin/products`, {
        data: { ids: productIds },
      });
    } catch (error) {
      console.error("Ошибка при удалении продуктов:", error);
      throw error;
    }
  },

  getAllProducts:
    (page: number, pageSize: number) => async (dispatch: AppDispatch) => {
      try {
        dispatch(GiftCardProductPageSlice.actions.setLoading());

        const response = await axios.get<IProduct[]>(
          `${baseAPI}/admin/get/all-products?page=${page}&pageSize=${pageSize}`
        );

        dispatch(GiftCardProductPageSlice.actions.setData(response.data));
      } catch (error: any) {
        dispatch(GiftCardProductPageSlice.actions.setError(error.message));
      }
    },

  searchProducts:
    (searchQuery: string, page: number, pageSize: number) =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(GiftCardProductPageSlice.actions.setLoading());

        const response = await axios.get<IProduct[]>(
          `${baseAPI}/admin/search/products?search=${searchQuery}&page=${page}&pageSize=${pageSize}`
        );

        dispatch(GiftCardProductPageSlice.actions.setData(response.data));
      } catch (error: any) {
        dispatch(GiftCardProductPageSlice.actions.setError(error.message));
      }
    },
};
