import React from 'react';

function ProductRow({ product }) {
  const { name, category, price, inStock } = product;

  const rowStyle = {
    color: inStock ? 'inherit' : 'red',
  };

  return (
    <tr style={rowStyle}>
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{inStock ? 'Yes' : 'No'}</td>
    </tr>
  );
}

export default ProductRow;

