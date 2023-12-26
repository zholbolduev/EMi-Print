"use client";

import "./InputWithLabel.scss";

interface InputWithLabel {
  label?: string;
  name?: string;
  required?: boolean;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
}

const InputWithLabel: React.FC<InputWithLabel> = ({
  label,
  required,
  value,
  onChange,
  name,
  type,
}: InputWithLabel) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div className="input-with-label">
      <label>
        {label}
        {required && <span>*</span>}
      </label>
      {type === "textarea" ? (
        <textarea name={name} onChange={handleChange} value={value} />
      ) : (
        <input
          name={name}
          onChange={handleChange}
          value={value}
          type="text"
        />
      )}
    </div>
  );
};

export default InputWithLabel;
