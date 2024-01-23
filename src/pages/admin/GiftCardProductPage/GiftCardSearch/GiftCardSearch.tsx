// GiftCardSearch.tsx
import React, { useState, useEffect } from "react";
import "./GiftCardSearch.scss";

interface GiftCardSearchProps {
  onSearch: (query: string) => void;
}

const GiftCardSearch: React.FC<GiftCardSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(delayTimer);
  }, [searchQuery, onSearch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className="searchBlock" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Поиск"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default GiftCardSearch;
