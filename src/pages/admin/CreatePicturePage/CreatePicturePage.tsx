// CreatePicturePage.tsx
"use client";

import "./CreatePicturePage.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import InputWithLabel from "@/shared/UI/InputWithLabel/InputWithLabel";
import Select from "@/shared/UI/Select/Select";
import Counter from "@/shared/UI/Counter/Counter";
import Switch from "@/shared/UI/Switch/Switch";
import Button from "@/shared/UI/Button/Button";
import { createPictureSlice } from "./CreatePicturePageSlice";
import { postPictureProduct } from "./CreatePicturePageAction";
import { baseAPI } from "../../../shared/baseAPI";
import FileInput from "./FileInput";

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const CreatePicturePage: React.FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [size, setSize] = useState<string[]>([""]);
  const [type, setType] = useState<string[]>([""]);
  const [minImageCount, setMinImageCount] = useState<number>(0);
  const [maxImageCount, setMaxImageCount] = useState<number>(0);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [haveToCheck, setHaveToCheck] = useState<boolean>(false);
  const [priceWithText, setPriceWithText] = useState<string>("");
  const [priceWithoutText, setPriceWithoutText] = useState<string>("");
  const [additional, setAdditional] = useState<string>("");

  const handleSave = async () => {
    try {
      dispatch(createPictureSlice.actions.setIsLoading());

      const newPictureProduct = {
        title,
        description,
        size,
        type,
        minImageCount,
        maxImageCount,
        isAvailable,
        haveToCheck,
        priceWithText,
        priceWithoutText,
        additional,
      };

      // Теперь используем экшен postPictureProduct для отправки запроса
      dispatch(postPictureProduct(newPictureProduct));
    } catch (error: any) {
      dispatch(createPictureSlice.actions.setError(error.message));
    }
  };

  const [images, setImages] = useState<{ id: string; url: string }[]>([]);

  const handleFileChange = (files: FileList | null) => {
    if (files) {
      const newImages = Array.from(files).map((file) => ({
        id: generateUUID(),
        url: URL.createObjectURL(file),
      }));
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (id: string) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <div className="create-picture">
      <h3>Создание продукта фотографий</h3>
      <InputWithLabel
        onChange={(e) => setTitle(e.target.value)}
        label="Заголовок"
        required
      />
      <InputWithLabel
        onChange={(e) => setDescription(e.target.value)}
        label="Описание"
        type="textarea"
      />
      <Select
        options={["19", "20"]}
        placeholder="Size"
        value={size}
        handleSelect={setSize}
        label="Размер Фотографии"
        required
      />
      <Select
        options={["Square", "Romb"]}
        placeholder="Type"
        value={type}
        handleSelect={setType}
        label="Тип Фотографии"
        required
      />
      <Counter
        handleChange={setMinImageCount}
        value={minImageCount}
        label="Минимальное количество фотографий"
        required
      />
      <Counter
        handleChange={setMaxImageCount}
        value={maxImageCount}
        label="Максимальное количество фотографий"
      />
      <Switch
        onClick={() => setIsAvailable((prev) => !prev)}
        label="В наличии"
      />
      <Switch
        onClick={() => setHaveToCheck((prev) => !prev)}
        label="Необходимо уточнить"
      />
      <FileInput label="Загрузить Фотографии" onChange={handleFileChange} />
      <div className="uploaded-images-container">
        <div className="uploaded-images">
          {images.map((image) => (
            <div key={image.id} className="uploaded-image">
              <img
                width={300}
                height={300}
                src={image.url}
                alt={`Uploaded ${image.id}`}
              />
              <button
                style={{ color: "white" }}
                onClick={() => handleRemoveImage(image.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      </div>{" "}
      <InputWithLabel
        onChange={(e) => setPriceWithoutText(e.target.value)}
        label="Цена без текста"
        required
      />
      <InputWithLabel
        onChange={(e) => setPriceWithText(e.target.value)}
        label="Цена с текстом"
        required
      />
      <InputWithLabel
        onChange={(e) => setAdditional(e.target.value)}
        label="Дополнительно"
        type="textarea"
      />
      <Button color="green" onClick={handleSave}>
        Сохранить
      </Button>
    </div>
  );
};

export default CreatePicturePage;
