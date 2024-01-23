// GiftCardSearchActions.ts

import axios from "axios";
import { baseAPI } from "../../../../shared/baseAPI";
import { AppDispatch } from "../../../../app/redux/store";
import GiftCardProductPageSlice, {
  IProduct,
} from "../GiftCardProductPageSlice";

export const GiftCardSearchActions = {
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
