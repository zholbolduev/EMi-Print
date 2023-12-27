import back from "../assets/back.svg";
import LoginEntity from "@/entities/AuthEntities/LoginEntity/LoginEntity";
import "./SignInPage.scss";

const SignInPage = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__wrapper">
        <img src={back} alt="background" />
      </div>
      <LoginEntity />
    </div>
  );
};

export default SignInPage;
