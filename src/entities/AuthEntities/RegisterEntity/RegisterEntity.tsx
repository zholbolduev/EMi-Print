import RegisterFeature from "@/features/AuthFeatures/RegisterFeature/RegisterFeature";
import "./RegisterEntity.scss";

const RegisterEntity = () => {
  return (
    <div className="registerEntity">
      <div className="registerEntity__wrapper">
        <h2>Регистрация</h2>
        <RegisterFeature />
      </div>
    </div>
  );
};

export default RegisterEntity;
