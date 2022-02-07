import React from 'react';

export default function Header(props) {

  const {countCartItems} = props;

  return (
      <header className='row block center'>
          <div>
            <a href='#/'>
              <h1>Shop Project</h1>
            </a>
          </div>
          <div>
            <a href='#/Cart'>Cart{' '}{countCartItems ? 
            (<button className='badge'>{countCartItems}</button>) : ('')}
            </a>
          </div>
      </header>
  );
}
