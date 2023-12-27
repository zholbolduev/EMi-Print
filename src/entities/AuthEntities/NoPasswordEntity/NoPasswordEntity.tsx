import NoPasswordFeature from "@/features/AuthFeatures/NoPasswordFeature/NoPasswordFeature";
import "./NoPasswordEntity.scss";

const NoPasswordEntity = () => {
  return (
    <div className="noPasswordEntity">
      <img className="noPasswordEntity__logo" />
      <div className="noPasswordEntity__wrapper">
        <h2>Сброс пароля</h2>
        <NoPasswordFeature />
      </div>
    </div>
  );
};

export default NoPasswordEntity;
