import React from 'react';

function Button ({ id, setBought, bought }) {
  const handleAdd = (id) => {
    setBought(id)
  }

  return (
    <div className='card-button'>
    <button className="btn" onClick={() => handleAdd(id)} disabled={bought} >
      {bought ? "Добавлено в корзину" : "Добавить в корзину"}
    </button>
    </div>
    );
}

export default Button;