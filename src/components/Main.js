import React from 'react';
import SingleProduct from "./SingleProduct";

export default function Main(props) {

  const {productInfo, onAdd, category} = props;


  if (category === 'Vegetables') {
    return (
      <main className='block column2'>
        <h2>Products</h2>
        <div className='row'>
          {productInfo.map((product) => {
              if (product.category === 'Vegetables') {
                return <SingleProduct key={product.id} product={product} onAdd={onAdd}></SingleProduct>
              }
            }
          )}
        </div>
      </main>
      );
  } else if (category === 'Fruits') {
    return (
      <main className='block column2'>
        <h2>Products</h2>
        <div className='row'>
          {productInfo.map((product) => {
              if (product.category === 'Fruits') {
                return <SingleProduct key={product.id} product={product} onAdd={onAdd}></SingleProduct>
              }
            }
          )}
        </div>
      </main>
      );
  } else if (category === 'Dairy') {
    return (
      <main className='block column2'>
        <h2>Products</h2>
        <div className='row'>
          {productInfo.map((product) => {
              if (product.category === 'Dairy') {
                return <SingleProduct key={product.id} product={product} onAdd={onAdd}></SingleProduct>
              }
            }
          )}
        </div>
      </main>
      );
    }
    else {
      return (
        <main className='block column2'>
          <h2>Products</h2>
          <div className='row'>
            {productInfo.map((product) => {
                  return <SingleProduct key={product.id} product={product} onAdd={onAdd}></SingleProduct>
              }
            )}
          </div>
        </main>
        );
      }
  
}
