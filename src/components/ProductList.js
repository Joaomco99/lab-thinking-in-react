import React, { useState } from "react";
import data from "../data.json";

function ProductList() {
  const [products] = useState(data);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>In Stock: {product.inStock ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

