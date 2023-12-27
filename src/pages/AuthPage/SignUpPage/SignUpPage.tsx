import "./SignUpPage.scss";
import back from "../assets/back.svg";
import RegisterEntity from "@/entities/AuthEntities/RegisterEntity/RegisterEntity";

const SignUpPage = () => {
  return (
    <div className="registerPage">
      <div className="registerPage__wrapper">
        <img src={back} alt="background" />
      </div>
      <RegisterEntity />
    </div>
  );
};

export default SignUpPage;
