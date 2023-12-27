import axios from "axios";
import { NoPasswordFeatureSlice } from "./NoPasswordFeatureSlice";
import { AppDispatch } from "../../../app/redux/store";
import { baseAPI } from "../../../shared/baseAPI";
import { ITokens } from "../types";

export const NoPasswordAction =
  (email: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(NoPasswordFeatureSlice.actions.setLoading());

      const user = {
        email,
      };

      const response = await axios.post<ITokens>(`${baseAPI}/auth`, user);
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch(NoPasswordFeatureSlice.actions.setData(response.data));
    } catch (error: any) {
      dispatch(NoPasswordFeatureSlice.actions.setError(error.message));
    }
  };
