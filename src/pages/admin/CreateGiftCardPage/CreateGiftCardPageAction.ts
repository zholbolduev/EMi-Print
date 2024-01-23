// CreateReadySolutionPageAction.ts

import axios from "axios";
import { AppDispatch } from "../../../app/redux/store";
import { CreateGiftCardPageSlice } from "./CreateGiftCardPageSlice";
import { baseAPI } from "../../../shared/baseAPI";

export const postGiftCardProduct =
  (newGiftCardProduct: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(CreateGiftCardPageSlice.actions.setIsLoading());

      await axios.post(`${baseAPI}/admin/product/create`, newGiftCardProduct);

      dispatch(
        CreateGiftCardPageSlice.actions.setSuccess("Вы успешно создали продукт")
      );
    } catch (error: any) {
      dispatch(CreateGiftCardPageSlice.actions.setError(error.message));
    }
  };
