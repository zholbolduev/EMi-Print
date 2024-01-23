// CreateReadySolutionPage.tsx

"use client";

import "./CreateGiftCardPage.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputWithLabel from "@/shared/UI/InputWithLabel/InputWithLabel";
import Select from "@/shared/UI/Select/Select";
import Counter from "@/shared/UI/Counter/Counter";
import Switch from "@/shared/UI/Switch/Switch";
import Button from "@/shared/UI/Button/Button";
import { CreateGiftCardPageSlice } from "./CreateGiftCardPageSlice";
import { postGiftCardProduct } from "./CreateGiftCardPageAction";
import { baseAPI } from "../../../shared/baseAPI";
import FileInput from "./FileInput";

const CreateGiftCardPage = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [size, setSize] = useState<string[]>([""]);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [haveToCheck, setHaveToCheck] = useState<boolean>(false);
  const [imgType, setImgType] = useState<string[]>([""]);
  const [retailPrice, setretailPrice] = useState<string>("");
  const [wholesalePrice, setWholesalePrice] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [forr, setFor] = useState<string>("");
  const [additional, setAdditional] = useState<string>("");

  const handleSave = async () => {
    try {
      dispatch(CreateGiftCardPageSlice.actions.setIsLoading());

      const newGiftCardProduct = {
        title,
        description,
        size,
        isAvailable,
        haveToCheck,
        imgType,
        retailPrice,
        wholesalePrice,
        color,
        forr,
        additional,
      };

      dispatch(postGiftCardProduct(newGiftCardProduct));
    } catch (error: any) {
      dispatch(CreateGiftCardPageSlice.actions.setError(error.message));
    }
  };

  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  // =-----------------

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
    <div className="create-gift-card">
      <h3>Создание продукта Открытки</h3>
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
        placeholder="Image size"
        value={size}
        handleSelect={setSize}
        label="Размер Фотографии"
        required
      />
      <Select
        options={["Square", "Romb"]}
        placeholder="Type img"
        value={imgType}
        handleSelect={setImgType}
        label="Тип Фотографии"
        required
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
      </div>

      <Switch
        onClick={() => setIsAvailable((prev) => !prev)}
        label="В наличии"
      />
      <Switch
        onClick={() => setHaveToCheck((prev) => !prev)}
        label="Необходимо уточнить"
      />
      <Button>Загрузить Фотографии</Button>
      <InputWithLabel
        onChange={(e) => setretailPrice(e.target.value)}
        label="Retail Price"
        required
      />
      <InputWithLabel
        onChange={(e) => setWholesalePrice(e.target.value)}
        label="Wholesale Price"
        required
      />
      <InputWithLabel
        onChange={(e) => setColor(e.target.value)}
        label="Цвет"
        required
      />
      <InputWithLabel
        onChange={(e) => setFor(e.target.value)}
        label="for"
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

export default CreateGiftCardPage;
