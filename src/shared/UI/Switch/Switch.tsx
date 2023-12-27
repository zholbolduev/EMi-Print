"use client";

import { useState } from "react";
import "./Switch.scss";

interface ISwitchProps {
  onClick?: () => void;
  label?: string;
}

const Switch: React.FC<ISwitchProps> = ({
  onClick,
  label,
}: ISwitchProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="switch">
      <label>{label}</label>
      <button
        onClick={() => {
          setToggle((prev) => !prev);
          onClick && onClick();
        }}
        className={`switch__btn${toggle ? "_active" : ""}`}
      >
        <div />
      </button>
    </div>
  );
};

export default Switch;
