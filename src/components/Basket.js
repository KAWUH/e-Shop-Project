import React from 'react';

export default function Basket(props) {

  const {cartItems, onAdd, onRemove} = props;
  const productsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const transportPrice = productsPrice > 300 ? 0 : 20;
  const totalPrice = productsPrice + transportPrice;

  return (
  <aside className='block column1'>
      <h2>Your Cart</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is waiting to be filled</div>}
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className='column2'>{item.name}</div>
          <div className='column2'>
            <button onClick={() => onAdd(item)} className="add">+</button>
            <button onClick={() => onRemove(item)} className="remove">-</button>
          </div>
          <div className='column2 text-right'>{item.qty} x {item.price.toFixed(2)} zł</div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className='row'>
            <div className='column2'>Products Price</div>
            <div className='column1 text-right'>{productsPrice.toFixed(2)} zł</div>
          </div>
          <div className='row'>
            <div className='column2'>Transport Cost</div>
            <div className='column1 text-right'>{transportPrice.toFixed(2)} zł</div>
          </div>
          <div className='row'>
            <div className='column2'><b>In total:</b></div>
            <div className='column1 text-right'><b>{totalPrice.toFixed(2)} zł</b></div>
          </div>
        </>
      )}
  </aside>
  );
}
