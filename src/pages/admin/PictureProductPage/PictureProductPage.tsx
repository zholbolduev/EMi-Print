"use client";

import "./PictureProductPage.scss";
import React, { useState } from "react";
import { params, products } from "./variables";
import Checkbox from "@/shared/UI/Checkbox/Checkbox";
import Link from "next/link";

const PictureProductPage = () => {
  const [select, setSelect] = useState<boolean>(false);
  const [productsId, setProductsId] = useState<number[]>([]);

  const selectAll = () => {
    if (productsId.length === products.length) {
      setProductsId([]);
    } else {
      let ids: number[] = [];
      products.map((id) => {
        ids.push(id.id);
      });

      setProductsId([...ids]);
    }
  };

  const selectProduct = (id: number) => {
    if (productsId.includes(id)) {
      const removeProduct = productsId.filter(
        (product) => product !== id
      );

      setProductsId(removeProduct);
    } else {
      setProductsId((prev) => [...prev, id]);
    }
  };

  return (
    <div className="picture-product-page">
      <div className="picture-product-page__header">
        <h3>Фотографии-Полароиды</h3>
        <Link href="/admin/picture/create">Добавить продукт</Link>
      </div>

      <div className="picture-product-page__actions">
        <button onClick={() => setSelect((prev) => !prev)}>
          Выбрать
        </button>
        <button
          className={`picture-product-page__actions-dlt-btn${
            productsId.length !== 0 ? "_active" : ""
          }`}
          disabled={productsId.length === 0}
        >
          Удалить
        </button>
        {select && <p>Выбранных элементов: {productsId.length}</p>}
      </div>

      <div className="picture-product-page__list">
        <ul className="picture-product-page__params">
          <li>
            {select && (
              <Checkbox
                isClicked={productsId.length === products.length}
                handleClick={selectAll}
              />
            )}
          </li>
          {params.map((param) => (
            <li key={param}>{param}</li>
          ))}
        </ul>
        {products.map((product, index) => (
          <ul className="picture-product-page__item" key={product.id}>
            <li>
              {select && (
                <Checkbox
                  isClicked={productsId.includes(product.id)}
                  handleClick={() => selectProduct(product.id)}
                />
              )}
            </li>
            <li>{index + 1}</li>
            <li>{product.title}</li>
            <li>{product.price}</li>
            <li>{product.price_with_text}</li>
            <li>
              {product.isAvailabel ? "В наличии" : "Нет в наличии"}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PictureProductPage;
