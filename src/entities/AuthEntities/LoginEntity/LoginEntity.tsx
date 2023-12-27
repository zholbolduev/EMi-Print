import "./LoginEntity.scss";
import LoginFeature from "@/features/AuthFeatures/LoginFeature/LoginFeature";

const LoginEntity = () => {
  return (
    <div className="loginEntity">
      <img className="loginEntity__logo" />
      <div className="loginEntity__wrapper">
        <h2>Вход</h2>
        <LoginFeature />
      </div>
    </div>
  );
};

export default LoginEntity;
