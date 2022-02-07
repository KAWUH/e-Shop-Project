import React from 'react';

export default function SingleProduct(props) {

    const {product, onAdd} = props;

  return (
    <div>
        <h3>{product.name}</h3>
        <div>{product.price} zł</div>
        <div>
            <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
    </div>
  );
}
