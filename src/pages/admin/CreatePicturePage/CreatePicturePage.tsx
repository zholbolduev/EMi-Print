"use client";

import InputWithLabel from "@/shared/UI/InputWithLabel/InputWithLabel";
import "./CreatePicturePage.scss";
import Select from "@/shared/UI/Select/Select";
import Counter from "@/shared/UI/Counter/Counter";
import Switch from "@/shared/UI/Switch/Switch";
import Button from "@/shared/UI/Button/Button";
import { useEffect, useState } from "react";

const CreatePicturePage = () => {
  const [size, setSize] = useState<string[]>([""]);
  const [type, setType] = useState<string[]>([""]);
  const [minImageCount, setMinImageCount] = useState<number>(0);
  const [maxImageCount, setMaxImageCount] = useState<number>(0);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [haveToCheck, setHaveToCheck] = useState<boolean>(false);

  return (
    <div className="create-picture">
      <h3>Создание продукта фотографий</h3>
      <InputWithLabel label="Заголовок" required />
      <InputWithLabel label="Описание" type="textarea" />
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
      <Button>Загрузить Фотографии</Button>
      <InputWithLabel label="Цена" required />
      <InputWithLabel label="Дополнительно" type="textarea" />

      <Button color="green">Сохранить</Button>
    </div>
  );
};

export default CreatePicturePage;
