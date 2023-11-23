import { useState, useEffect } from 'react';
import Products from './Products';
import Cart from './Cart';

const ProductsCart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/5')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <Products data={products} />
      <Cart data={products} />
    </>
  );
};

export default ProductsCart;
