import React from 'react';
import basket from './shopping-cart-solid.svg';

function Checkout ({ products }) {
  console.log(products)
  let count = products.filter((product) => {
    return product.bought === true
  })

    return (
    <div className="checkout">
      <img className="card-item" src={basket} alt="card" />
      <span className='counter' >{count.length}</span>
    </div>
  );
}

export default Checkout;