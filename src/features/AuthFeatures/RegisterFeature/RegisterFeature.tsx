"use client";

import Link from "next/link";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/redux.hook";
import { registerAction } from "./RegisterAction";
import "./RegisterFeature.scss";
import { ChangeEvent, useState } from "react";

const RegisterFeature = () => {
  const dispatch = useAppDispatch();

  const { error } = useAppSelector((state) => state.registerReducer);

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };
  const [companyName, setCompanyNamen] = useState<string>("");

  const [userProfileImage, setUserProfileImage] = useState<
    string | ArrayBuffer | null
  >("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setUserProfileImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const logToSystem = () => {
    dispatch(
      registerAction(
        name,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword,
        role,
        companyName,
        userProfileImage
      )
    );
  };

  return (
    <div className="align">
      <div className="grid">
        <form action="/" method="post" className="form login">
          <header className="login__header">
            <h3 className="login__title">Register</h3>
          </header>

          <div className="login__body">
            <div className="form__field">
              <input
                type="text"
                className="login__input"
                placeholder="First Name"
                name="name"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                required
              />
            </div>

            <div className="form__field">
              <input
                type="text"
                className="login__input"
                placeholder="Last Name"
                name="lastName"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLastName(e.target.value)
                }
                required
              />
            </div>

            <div className="form__field">
              <input
                type="email"
                className="login__input"
                placeholder="Email"
                name="email"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
              />
            </div>

            <div className="form__field">
              <input
                type="text"
                className="login__input"
                placeholder="Phone Number"
                name="phoneNumber"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhoneNumber(e.target.value)
                }
                required
              />
            </div>

            <div className="form__field">
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                name="password"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
              />
            </div>

            <div className="form__field">
              <input
                type="password"
                className="login__input"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(e.target.value)
                }
                required
              />
            </div>

            <div className="form__field">
              <select
                className="login__input"
                name="role"
                onChange={handleRoleChange}
                required
              >
                <option value="" disabled selected hidden>
                  Select Role
                </option>
                <option value="1">Corporate</option>
                <option value="2">Admin</option>
                <option value="3">Regular User</option>
                <option value="4">Anonymous</option>
              </select>
            </div>

            <div className="form__field">
              <input
                type="text"
                className="login__input"
                placeholder="Company Name"
                name="companyName"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCompanyNamen(e.target.value)
                }
                required
              />
            </div>

            <div className="form__field">
              <input
                type="file"
                className="login__input"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              <img
                src={
                  userProfileImage instanceof ArrayBuffer
                    ? ""
                    : userProfileImage
                }
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          </div>

          <footer className="login__footer">
            <Link
              className="login__submit"
              onClick={logToSystem}
              href="/"
              passHref
            >
              Sing up
            </Link>

            <p>
              <span className="icon icon--info">?</span>
              <a href="/sing-in" className="login__forgot-password">
                вернуться назад{" "}
              </a>
            </p>
          </footer>
          <p>{error}</p>
        </form>
      </div>
    </div>
  );
};

export default RegisterFeature;
