import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Products from '../components/Products';
import Contacts from '../components/Contacts';
import Cart from '../components/Cart';
import Home from '../components/Home';
import Loading from '../components/Loading';
import { v4 as uuidv4 } from 'uuid';

const Root = () => {
  const { name } = useParams();
  const [products, setProducts] = useState(); //add id and quan prop after fetching
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((res) => {
        if (res.ok) {
          return res.json(); //DONT FORGET TO RETURN HERE
        } else {
          throw new Error('conn err');
        }
      })
      .then((data) => {
        const newData = data.map((item) => ({
          id: uuidv4(),
          ...item,
          quantity: 0,
        })); // DONT FORGET TO WRAP NEW OBJECT WITH PARENTHESES
        setProducts(newData);
      })
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, []);

  function handleAddProductToCart(id) {
    //change flow, so everytime fetch assign quan:0. so will use 1 state for Products comp and Cart comp
    const newProducts = products.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setProducts(newProducts);
  }

  function handleDecreaseProductToCart(id) {
    const newProducts = products.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setProducts(newProducts);
  }

  let totalQuantity =
    //handling fetching
    products &&
    products.reduce((acc, obj) => {
      return acc + obj.quantity;
    }, 0);

  return (
    <>
      {/* nav bar  */}
      <div className="flex sticky top-0 bg-white">
        <Link to="/" className="mr-auto text-5xl">
          {' '}
          FakeShop{' '}
        </Link>
        <div className="flex gap-10 text-3xl">
          <Link to="/"> Home </Link>
          <Link to="/products"> Products </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
              data-testid="shopping-cart"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <div>{totalQuantity}</div>
          </Link>
        </div>
      </div>

      {/* content */}
      {/* second products to handle 'undefined' rendering (first render hasnt fetched yet) */}

      {name === 'products' && loading ? (
        <Loading />
      ) : (
        name === 'products' &&
        products && (
          <Products
            productDataArray={products}
            handleAddProductToCart={handleAddProductToCart}
            handleDecreaseProductToCart={handleDecreaseProductToCart}
          />
        )
      )}
      {name === 'contact' && <Contacts />}
      {name === 'cart' && <Cart />}
      {!name && <Home />}
    </>
  );
};

export default Root;

//the problem for this solution is when some state change, everything changes including the root. have to think
//about how to optimize later on. (maybe can use contextAPI)
//LESSON LEARNED

//DONT FORGET TO GENERATE KEY WHEN FETCHING DATA, DONT GENERATE KEY IN PROPS EX <COMP key={uuidv4()}>
//REFER TO AN OBJECT USING ID, DONT CREATE NEW OBJ STATE