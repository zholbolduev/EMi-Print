// CreateReadySolutionPageAction.ts

import axios from "axios";
import { AppDispatch } from "../../../app/redux/store";
import { CreateOtherPageSlice } from "./CreateOtherPageSlice";
import { baseAPI } from "../../../shared/baseAPI";

export const postOtherPage =
  (newOtherPageProduct: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(CreateOtherPageSlice.actions.setIsLoading());

      await axios.post(`${baseAPI}/admin/product/create`, newOtherPageProduct);

      dispatch(
        CreateOtherPageSlice.actions.setSuccess("Вы успешно создали продукт")
      );
    } catch (error: any) {
      dispatch(CreateOtherPageSlice.actions.setError(error.message));
    }
  };
