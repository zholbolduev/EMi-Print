"use client";

import { ChangeEvent, useState } from "react";
import "./LoginFeature.scss";
import { loginAction } from "./LoginAction";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/redux.hook";
import Link from "next/link";
import eye from "../assets/eye.svg";
import eye_closed from "../assets/eye_closed.svg";

const LoginFeature = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.loginReducer);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const logToSystem = () => {
    if (!email || !password) {
      setIsError(true);
      return;
    }

    dispatch(loginAction(email, password));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(e.target.value);
    setIsError(false);
  };

  return (
    <div className="loginFeature">
      <div className="loginFeature__input">
        <p>Почта</p>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, setEmail)
          }
          type="text"
        />
      </div>
      <div className="loginFeature__input">
        <p>Пароль</p>
        <div id="loginFeature__password">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e, setPassword)
            }
            type={showPassword ? "text" : "password"}
          />
          <img
            onClick={() => setShowPassword(!showPassword)}
            src={showPassword ? eye : eye_closed}
            alt=""
          />
        </div>
      </div>
      <p className="loginFeature__warning">{error}</p>
      <div className="loginFeature__additional">
        <div className="loginFeature__additional_btns">
          <div className="loginFeature__additional_btns_remember-me">
            <a href="sign-up" className="login__forgot-password">
              Ещё нет аккаунта?{" "}
            </a>{" "}
          </div>
          <a href="#" className="loginFeature__additional_btns_forgot-password">
            Забыли пароль?{" "}
          </a>
        </div>
        <div className="loginFeature__additional_no-account">
          {isError && <p style={{ color: "red" }}>Заполните все поля</p>}
          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        </div>
      </div>

      <button onClick={logToSystem}>Войти</button>
    </div>
  );
};

export default LoginFeature;
