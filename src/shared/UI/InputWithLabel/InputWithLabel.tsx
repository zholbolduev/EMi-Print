import "./InputWithLabel.scss";

const InputWithLabel = () => {
  return (
    <div className="input-with-label">
      <label>
        Инпут<span>*</span>
      </label>
      <input type="text" />
    </div>
  );
};

export default InputWithLabel;
