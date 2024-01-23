// CreatePicturePageAction.ts

import axios from "axios";
import { AppDispatch } from "../../../app/redux/store";
import { createPictureSlice } from "./CreatePicturePageSlice";
import { baseAPI } from "../../../shared/baseAPI";

export const postPictureProduct =
  (newPictureProduct: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(createPictureSlice.actions.setIsLoading());

      await axios.post(`${baseAPI}/admin/product/create`, newPictureProduct);

      dispatch(
        createPictureSlice.actions.setSuccess("Вы успешно создали продукт")
      );
    } catch (error: any) {
      dispatch(createPictureSlice.actions.setError(error.message));
    }
  };
