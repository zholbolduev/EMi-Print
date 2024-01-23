// GiftCardProductPage.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Checkbox from "@/shared/UI/Checkbox/Checkbox";
import GiftCardPagination from "./GiftCardPagination/GiftCardPagination";
import GiftCardSearch from "./GiftCardSearch/GiftCardSearch";
import { GiftCardPaginationActions } from "./GiftCardPagination/GiftCardPaginationAction";
import { GiftCardSearchActions } from "./GiftCardSearch/GiftCardSearchAction";
import "./GiftCardProductPage.scss";
import { generateMockProducts } from "./utils";

const pageSize = 10;

const GiftCardProductPage = () => {
  const [select, setSelect] = useState<boolean>(false);
  const [productsId, setProductsId] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showSelection, setShowSelection] = useState<boolean>(false);
  const [allProducts, setAllProducts] = useState(generateMockProducts());
  const [searchQuery, setSearchQuery] = useState<string>("");

  const totalPages = Math.ceil(allProducts.length / pageSize);

  const handlePageChange = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
    try {
      const newProducts = await GiftCardPaginationActions.getAllProducts(
        pageNumber,
        pageSize
      );
      setAllProducts(newProducts);
    } catch (error) {
      console.error("Ошибка при загрузке продуктов:", error);
    }
  };

  const handleSelectAll = () => {
    const newProductsId = select
      ? []
      : allProducts.map((product) => product.id);
    setProductsId(newProductsId);
    setSelect(!select);
  };

  const handleToggleSelection = () => {
    setShowSelection(!showSelection);
    if (!showSelection) {
      setProductsId([]);
      setSelect(false);
    }
  };

  const handleSelectProduct = (id: number) => {
    setProductsId((prev) =>
      prev.includes(id)
        ? prev.filter((productId) => productId !== id)
        : [...prev, id]
    );
    setSelect(true);
  };

  const handleDeleteSelected = async () => {
    try {
      await GiftCardPaginationActions.deleteProducts(productsId);
      const newProducts = await GiftCardPaginationActions.getAllProducts(
        currentPage,
        pageSize
      );
      setAllProducts(newProducts);
      setProductsId([]);
      setSelect(false);
    } catch (error) {
      console.error("Ошибка при удалении продуктов:", error);
    }
  };

  // const handleSearch = async (query: string) => {
  //   setSearchQuery(query);
  //   try {
  //     let newProducts = [];
  //     if (query.trim() !== "") {
  //       const searchResults = await GiftCardSearchActions.searchProducts(query);
  //       if (Array.isArray(searchResults)) {
  //         newProducts = searchResults;
  //       } else {
  //         console.error(
  //           "Результат поиска не является массивом:",
  //           searchResults
  //         );
  //       }
  //     } else {
  //       newProducts = await GiftCardPaginationActions.getAllProducts(
  //         currentPage,
  //         pageSize
  //       );
  //     }

  //     setAllProducts(Array.isArray(newProducts) ? newProducts : []);
  //   } catch (error) {
  //     console.error("Ошибка при поиске/загрузке продуктов:", error);
  //   }
  // };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedProducts = allProducts.slice(startIndex, endIndex);

  return (
    <div className="giftCard-product-page">
      <div className="giftCard-product-page__header">
        <h3>Открытки</h3>
        <Link href="/admin/gift-card/create">Добавить продукт</Link>
      </div>
      <div className="giftCard-product-page__actions">
        <button onClick={handleToggleSelection}>
          {showSelection ? "Скрыть выбор" : "Выбрать"}
        </button>
        {showSelection && (
          <>
            <button
              className={`giftCard-product-page__actions-dlt-btn${
                productsId.length !== 0 ? "_active" : ""
              }`}
              disabled={productsId.length === 0}
              onClick={handleDeleteSelected}
            >
              Удалить
            </button>
            {select && <p>Выбранных элементов: {productsId.length}</p>}
          </>
        )}

        <GiftCardSearch onSearch={handleSearch} />
      </div>
      <div className="giftCard-product-page__list">
        <ul className="giftCard-product-page__params">
          <li>
            {showSelection && (
              <Checkbox
                isClicked={productsId.length === allProducts.length}
                handleClick={handleSelectAll}
              />
            )}
          </li>
          <li>#</li>
          <li>Title</li>
          <li>Price</li>
          <li>Color</li>
          <li>Status</li>
        </ul>
        {filteredProducts.map((product, index) => (
          <ul className="giftCard-product-page__item" key={product.id}>
            <li>
              {showSelection && (
                <Checkbox
                  isClicked={productsId.includes(product.id)}
                  handleClick={() => handleSelectProduct(product.id)}
                />
              )}
            </li>

            <li>{startIndex + index + 1}</li>
            <li>{product.title}</li>
            <li>{product.price}</li>
            <li>{product.color}</li>
            <li>{product.isAvailable ? "В наличии" : "Нет в наличии"}</li>
          </ul>
        ))}
      </div>

      <GiftCardPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default GiftCardProductPage;
