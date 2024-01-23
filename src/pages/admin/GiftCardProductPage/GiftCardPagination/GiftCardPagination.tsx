// GiftCardPagination.tsx
import React from "react";
import "./GiftCardPagination.scss";

interface GiftCardPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const GiftCardPagination: React.FC<GiftCardPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="giftCard-pagination">
      <ul className="page-numbers">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              className="arrow-btn"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiftCardPagination;
