import React from "react";
import './style.css';
import Menu from './Menu';
import Logo from './Logo/Logo';
import Checkout from './Checkout/Checkout';

function Header({ products, setProducts, setBought}) {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <Checkout setBought={setBought} products={products} setProducts={setProducts}/>
      <p>Выход</p>
    </div>
  );
}



export default Header;
