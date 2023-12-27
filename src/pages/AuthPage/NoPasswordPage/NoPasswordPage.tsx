import back from "../assets/back.svg";
import "./NoPasswordPage.scss";
import NoPasswordEntity from "@/entities/AuthEntities/NoPasswordEntity/NoPasswordEntity";

const NoPasswordPage = () => {
  return (
    <div className="noPasswordPage">
      <div className="noPasswordPage__wrapper">
        <img src={back} alt="background" />
      </div>
      <NoPasswordEntity />
    </div>
  );
};

export default NoPasswordPage;
