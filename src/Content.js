import Card from './Card';

function Content ({ setBought, products, setProducts }) {
    const content = products.map((product) => {
    return  <Card id={product.id}
                  image={product.image}
                  name={product.name}
                  rating={product.rating}
                  bought={product.bought}
                  price={product.price}
                  setBought={setBought}
                  products={products}
                  setProducts={setProducts} />
  });
  return  [content]
}

export default Content;

