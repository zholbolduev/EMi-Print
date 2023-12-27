"use client";

import { ChangeEvent, useState } from "react";
import "./NoPasswordFeature.scss";
import { NoPasswordAction } from "./NoPasswordAction";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/redux.hook";
import Link from "next/link";

const NoPasswordFeature = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.loginReducer);

  const [email, setEmail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const logToSystem = () => {
    if (!email) {
      setIsError(true);
      return;
    }

    dispatch(NoPasswordAction(email));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(e.target.value);
    setIsError(false);
  };

  return (
    <div className="NoPasswordFeature">
      <div className="NoPasswordFeature__input">
        <p>Почта</p>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, setEmail)
          }
          type="text"
        />
      </div>
      <p className="NoPasswordFeature__warning">{error}</p>
      <div className="NoPasswordFeature__additional">
        <div className="NoPasswordFeature__additional_btns">
          <a
            href="/sign-in"
            className="NoPasswordFeature__additional_btns_forgot-password"
          >
            Вернуться назад{" "}
          </a>
        </div>
        <div className="NoPasswordFeature__additional_no-account">
          {isError && <p style={{ color: "red" }}>Заполните все поля</p>}
          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        </div>
      </div>
      <button onClick={logToSystem}>Отправить</button>
    </div>
  );
};

export default NoPasswordFeature;
