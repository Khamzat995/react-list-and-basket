import React from 'react';
import Header from "./Header";
import Content from './Content';
import { database } from './database';
import { useState } from 'react';


function App () {
  const [products, setProducts] = useState(database)
    const setBought = (id) => {
      let product = products.map((item) => {
        if (item.id === id) {
           item.bought = true
        }
         return item
      })
      setProducts(product)
    };


  return (
    <div className="app">
      <Header setBought={setBought} products={products} setProducts={setProducts}/>
      <div className="content">
      <Content setBought={setBought} products={products} setProducts={setProducts}/>
      </div>
    </div>
  );
}

export default App;
