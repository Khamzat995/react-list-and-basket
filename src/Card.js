import React from 'react';
import Button from './Button';

function Card({ id, bought, image, name, rating, price, setBought, products, setProducts}) {
  return (
    <div key={id} className='card'>
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="card-name">
        <h5>{name}</h5>
      </div>
      <div className="card-info">
        <p>{rating}</p>
      </div>
      <div className="card-price">
        <p>{price}</p>
      </div>
      <Button id={id} bought={bought} setBought={setBought} products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Card;


