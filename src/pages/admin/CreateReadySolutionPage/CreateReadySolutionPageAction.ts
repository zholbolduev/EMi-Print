// CreateReadySolutionPageAction.ts

import axios from "axios";
import { AppDispatch } from "../../../app/redux/store";
import { createReadySolutionSlice } from "./CreateReadySolutionPageSlice";
import { baseAPI } from "../../../shared/baseAPI";

export const postReadySolutionProduct =
  (newReadySolutionProduct: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(createReadySolutionSlice.actions.setIsLoading());

      await axios.post(
        `${baseAPI}/admin/product/create`,
        newReadySolutionProduct
      );

      dispatch(
        createReadySolutionSlice.actions.setSuccess(
          "Вы успешно создали продукт"
        )
      );
    } catch (error: any) {
      dispatch(createReadySolutionSlice.actions.setError(error.message));
    }
  };
