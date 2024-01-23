// ReadySolutionProductPageAction.ts

import axios from "axios";
import { baseAPI } from "../../../shared/baseAPI";
import { AppDispatch } from "../../../app/redux/store";
import ReadySolutionProductPageSlice, {
  IProduct,
} from "./ReadySolutionProductPageSlice";

export const ReadySolutionProductPageAction = {
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
      dispatch(ReadySolutionProductPageSlice.actions.setLoading());

      const response = await axios.get<IProduct[]>(
        `${baseAPI}/admin/get/products`
      );

      dispatch(ReadySolutionProductPageSlice.actions.setData(response.data));
    } catch (error: any) {
      dispatch(ReadySolutionProductPageSlice.actions.setError(error.message));
    }
  },
};
