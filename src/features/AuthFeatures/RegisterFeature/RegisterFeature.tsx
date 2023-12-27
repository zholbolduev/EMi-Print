"use client";

import Link from "next/link";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/redux.hook";
import { registerAction } from "./RegisterAction";
import "./RegisterFeature.scss";
import { ChangeEvent, useState } from "react";
import eye from "../assets/eye.svg";
import eye_closed from "../assets/eye_closed.svg";

const RegisterFeature = () => {
  const dispatch = useAppDispatch();

  const { error } = useAppSelector((state) => state.registerReducer);

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const logToSystem = () => {
    dispatch(
      registerAction(
        name,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword
      )
    );
  };

  return (
    <div className="registerFeature">
      <div className="registerFeature__input">
        <p>Имя</p>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          type="text"
        />
      </div>
      <div className="registerFeature__input">
        <p>Фамилия</p>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
          type="text"
        />
      </div>
      <div className="registerFeature__input">
        <p>Почта</p>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          type="text"
        />
      </div>

      <div className="registerFeature__input">
        <p>Номер телефона</p>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhoneNumber(e.target.value)
          }
          type="text"
        />
      </div>

      <div className="registerFeature__input">
        <p>Пароль</p>
        <div id="registerFeature__password">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
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

      <div className="registerFeature__input">
        <p>Потвердите Пароль</p>
        <div id="registerFeature__password">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
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

      <p className="registerFeature__warning">{error}</p>
      <div className="registerFeature__additional">
        <div className="registerFeature__additional__has-account">
          <a href="/sign-in">Уже есть аккаунт? Войти</a>
        </div>
      </div>

      <button
        onClick={() => {
          logToSystem();
        }}
      >
        Регистрация
      </button>
    </div>
  );
};

export default RegisterFeature;
