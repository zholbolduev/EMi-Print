"use client";

import { ChangeEvent, useState } from "react";
import "./LoginFeature.scss";
import { loginAction } from "./LoginAction";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/redux.hook";
import Link from "next/link";

const LoginFeature = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.loginReducer);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

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
    <div>
      <div className="align">
        <div className="grid">
          <form action="/" method="post" className="form login">
            <header className="login__header">
              <h3 className="login__title">Login</h3>
            </header>

            <div className="login__body">
              <div className="form__field">
                <input
                  type="email"
                  className="login__input"
                  placeholder="Email"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, setEmail)
                  }
                  required
                />
              </div>

              <div className="form__field">
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, setPassword)
                  }
                  required
                />
              </div>
            </div>

            <footer className="login__footer">
              <button className="login__submit" onClick={logToSystem}>
                Login
              </button>

              <p>
                <span className="icon icon--info">?</span>
                <a href="#" className="login__forgot-password">
                  Forgot Password
                </a>
              </p>
              <p>
                <span className="icon icon--info">?</span>
                <a href="/sign-up" className="login__forgot-password">
                  Нету аккаунта?
                </a>
              </p>
            </footer>

            {isError && <p style={{ color: "red" }}>Заполните все поля</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFeature;
