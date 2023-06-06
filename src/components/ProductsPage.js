import React, { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleStockFilter = (isChecked) => {
    setInStockOnly(isChecked);
  };

  // Filter the products based on the search term and in-stock only flag
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter((product) => inStockOnly ? product.inStock : true);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearch={handleSearch} handleStockFilter={handleStockFilter} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
