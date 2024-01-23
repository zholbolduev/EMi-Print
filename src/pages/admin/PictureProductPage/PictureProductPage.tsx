// PictureProductPage.tsx

"use client";

import "./PictureProductPage.scss";
import React, { useState, useEffect } from "react";
import { params, initialProducts } from "./variables";
import Checkbox from "@/shared/UI/Checkbox/Checkbox";
import Link from "next/link";
import { PictureProductPageAction } from "./PictureProductPageAction";

const PictureProductPage = () => {
  const [select, setSelect] = useState<boolean>(false);
  const [productsId, setProductsId] = useState<number[]>([]);
  // const [products, setProducts] = useState([]);

  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    PictureProductPageAction.getProducts();
  }, []);

  const selectAll = () => {
    if (productsId.length === products.length) {
      setProductsId([]);
    } else {
      let ids: number[] = [];
      products.forEach((product) => {
        ids.push(product.id);
      });

      setProductsId([...ids]);
    }
  };

  const selectProduct = (id: number) => {
    if (productsId.includes(id)) {
      const removeProduct = productsId.filter((productId) => productId !== id);

      setProductsId(removeProduct);
    } else {
      setProductsId((prev) => [...prev, id]);
    }
  };

  const deleteSelectedProducts = async () => {
    try {
      await PictureProductPageAction.deleteProducts(productsId);
      await PictureProductPageAction.getProducts();
      setProductsId([]);
      setSelect(false);
    } catch (error) {
      console.error("Error deleting products:", error);
    }
  };

  return (
    <div className="picture-product-page">
      <div className="picture-product-page__header">
        <h3>Фотографии-Полароиды</h3>
        <Link href="/admin/picture/create">Добавить продукт</Link>
      </div>

      <div className="picture-product-page__actions">
        <button onClick={() => setSelect((prev) => !prev)}>Выбрать</button>
        <button
          className={`picture-product-page__actions-dlt-btn${
            productsId.length !== 0 ? "_active" : ""
          }`}
          disabled={productsId.length === 0}
          onClick={deleteSelectedProducts}
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
            <li>{product.isAvailable ? "В наличии" : "Нет в наличии"}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PictureProductPage;
