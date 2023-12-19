import axios from "axios";
import { loginFeatureSlice } from "./LoginFeatureSlice";
import { AppDispatch } from "../../../app/redux/store";
import { baseAPI } from "../../../shared/baseAPI";
import { ITokens } from "../types";

export const loginAction =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginFeatureSlice.actions.setLoading());

      const user = {
        email,
        password,
      };

      const response = await axios.post<ITokens>(`${baseAPI}/auth`, user);
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch(loginFeatureSlice.actions.setData(response.data));
    } catch (error: any) {
      dispatch(loginFeatureSlice.actions.setError(error.message));
    }
  };
