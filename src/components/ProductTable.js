import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>In Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <ProductRow key={index} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;


