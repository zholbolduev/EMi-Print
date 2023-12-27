"use client";

import "./Select.scss";
import chevron from "../../icons/chevron.svg";
import Image from "next/image";
import { useState } from "react";

interface ISelectProps {
  options: string[];
  placeholder: string;
  isMultiple?: boolean;
  handleSelect: (options: string[]) => void;
  value: string[];
  label: string;
  required?: boolean;
}

const Select: React.FC<ISelectProps> = ({
  options,
  placeholder,
  isMultiple,
  handleSelect,
  value,
  label,
  required,
}: ISelectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const setOptions = (option: string) => {
    if (isMultiple) {
      if (value[0] === "") {
        handleSelect([option]);
        return;
      }

      if (value.includes(option)) {
        if (value.length === 1) {
          handleSelect([""]);
          return;
        }

        const removeOption = value.filter((item) => item !== option);

        return handleSelect(removeOption);
      }

      return handleSelect([...value, option]);
    }

    handleSelect([option]);
    setOpen(false);
  };
  return (
    <div className="select">
      <label>
        {label}
        {required && <span>*</span>}
      </label>
      <div className="select__wrapper">
        <button
          onClick={() => setOpen((prev) => !prev)}
          id="select-btn"
        >
          <p>{value[0] === "" ? placeholder : value.join(", ")}</p>
          <Image
            src={chevron}
            alt="chevron icon"
            width={24}
            height={24}
          />
        </button>
        {open && (
          <ul className="select__options">
            {options.map((option) => (
              <li key={option} className={`select__item`}>
                <button onClick={() => setOptions(option)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
