import "./Counter.scss";
import chevron from "../../icons/chevron.svg";
import Image from "next/image";
import { useEffect } from "react";

interface ICounterProps {
  handleChange: (value: number) => void;
  value: number;
  label?: string;
  required?: boolean;
}

const Counter: React.FC<ICounterProps> = ({
  handleChange,
  value,
  label,
  required,
}: ICounterProps) => {
  const decrement = () => {
    if (value === 0) {
      return;
    } else {
      handleChange(value - 1);
    }
  };

  return (
    <div className="counter">
      <label>
        {label}
        {required && <span>*</span>}
      </label>
      <div className="counter__wrapper">
        <input
          value={value}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(Number(e.target.value))
          }
        />
        <div className="counter__arrows">
          <button onClick={() => handleChange(value + 1)}>
            <Image src={chevron} alt="chevron icon" />
          </button>
          <button onClick={decrement}>
            <Image src={chevron} alt="chevron icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
