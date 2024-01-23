// OtherProductPage.tsx

"use client";

import "./OtherProductPage.scss";
import React, { useState, useEffect } from "react";
import { params, initialProducts } from "./variables";
import Checkbox from "@/shared/UI/Checkbox/Checkbox";
import Link from "next/link";
import { OtherProductPageAction } from "./OtherProductPageAction";

const OtherProductPage = () => {
  const [select, setSelect] = useState<boolean>(false);
  const [productsId, setProductsId] = useState<number[]>([]);
  // const [products, setProducts] = useState([]);

  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    OtherProductPageAction.getProducts();
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
      await OtherProductPageAction.deleteProducts(productsId);
      await OtherProductPageAction.getProducts();
      setProductsId([]);
      setSelect(false);
    } catch (error) {
      console.error("Error deleting products:", error);
    }
  };

  return (
    <div className="other-product-page">
      <div className="other-product-page__header">
        <h3>Прочие</h3>
        <Link href="/admin/other/create">Добавить продукт</Link>
      </div>

      <div className="other-product-page__actions">
        <button onClick={() => setSelect((prev) => !prev)}>Выбрать</button>
        <button
          className={`other-product-page__actions-dlt-btn${
            productsId.length !== 0 ? "_active" : ""
          }`}
          disabled={productsId.length === 0}
          onClick={deleteSelectedProducts}
        >
          Удалить
        </button>
        {select && <p>Выбранных элементов: {productsId.length}</p>}
      </div>

      <div className="other-product-page__list">
        <ul className="other-product-page__params">
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
          <ul className="other-product-page__item" key={product.id}>
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
            <li>{product.color}</li>
            <li>{product.isAvailable ? "В наличии" : "Нет в наличии"}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default OtherProductPage;
