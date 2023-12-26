"use client";

import Image from "next/image";
import check_icon from "../../../shared/icons/check-icon-light.svg";
import "./Checkbox.scss";
import { useEffect, useState } from "react";

interface CheckboxProps {
  isClicked: boolean;
  handleClick: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  isClicked,
  handleClick,
}: CheckboxProps) => {
  const [clicked, setClicked] = useState<boolean>(isClicked);

  useEffect(() => {
    setClicked(isClicked);
  }, [isClicked]);

  return (
    <button
      onClick={() => {
        setClicked((prev) => !prev);
        handleClick();
      }}
      className="checkbox"
    >
      {clicked && (
        <Image
          src={check_icon}
          alt="Check Icon"
          width={24}
          height={24}
        />
      )}
    </button>
  );
};

export default Checkbox;
