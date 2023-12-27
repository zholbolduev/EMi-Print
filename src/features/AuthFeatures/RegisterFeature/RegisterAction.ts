import axios from "axios";
import { registerFeatureSlice } from "./RegisterFeatureSlice";
import { AppDispatch } from "../../../app/redux/store";
import { ITokens } from "../types";
import { baseAPI } from "../../../shared/baseAPI";

export const registerAction =
  (
    name: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    confirmPassword: string
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(registerFeatureSlice.actions.setLoading());
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (lastName.length > 20) {
        console.log(lastName.length);
        dispatch(
          registerFeatureSlice.actions.setError(
            "Поле имя содержит больше 20 символов"
          )
        );
        return;
      }

      if (!emailPattern.test(email)) {
        dispatch(
          registerFeatureSlice.actions.setError("Введите действительную почту")
        );
        return;
      }

      if (
        password.length < 6 ||
        !/\d/.test(password) ||
        !/[A-Z]/.test(password)
      ) {
        dispatch(
          registerFeatureSlice.actions.setError(
            "Минимум 6 символов, не менее 1 цифры, хотя бы 1 символ с верхним регистром"
          )
        );
        return;
      }

      const user = {
        name,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword,
      };

      const response = await axios.post<ITokens>(`${baseAPI}/register`, user, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });

      dispatch(registerFeatureSlice.actions.setData(response.data));
    } catch (error: any) {
      dispatch(registerFeatureSlice.actions.setError(error.message));
    }
  };
