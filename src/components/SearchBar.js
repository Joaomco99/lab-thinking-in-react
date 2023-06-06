import React from 'react';

function SearchBar({ handleSearch, handleStockFilter }) {
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    handleSearch(searchTerm);
  };

  const handleStockChange = (event) => {
    const isChecked = event.target.checked;
    handleStockFilter(isChecked);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleSearchChange} />
      <label>
        <input type="checkbox" onChange={handleStockChange} />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
