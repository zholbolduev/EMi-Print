"use client";

import Image from "next/image";
import "./TryByYourself.scss";
import polaroid from "./assets/1.jpg";
import { useState } from "react";
import folder from "./icons/folder-icon.svg";

const TryByYourself = () => {
  const [image, setImage] = useState(polaroid.src);

  const showUploadedPhoto = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploaded = e.target.files;

    if (!uploaded) return;

    const arr = Array.from(uploaded);
    const mapped = arr.map((file) => URL.createObjectURL(file));

    setImage(mapped[0]);
  };
  return (
    <div className="try-by-yourself padding">
      <h3>Попробуй сам!</h3>
      <div className="try-by-yourself__container">
        <div className="try-by-yourself__polaroid">
          <img src={image} alt="Polaroid Image" />
        </div>
        <label
          htmlFor="try-by-yourself-input"
          className="try-by-yourself__load-image"
        >
          <input
            onChange={showUploadedPhoto}
            type="file"
            id="try-by-yourself-input"
          />
          <Image src={folder} alt="Folder Icon" />
          <p>
            Загрузите свою фотографию и сразу увидьте, как она оживает
            в стиле полароид с EMi Print. Создайте свой уникальный
            момент прямо сейчас!
          </p>
        </label>
      </div>
    </div>
  );
};

export default TryByYourself;
