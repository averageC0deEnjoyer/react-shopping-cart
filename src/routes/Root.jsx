import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Products from '../components/Products';
import Contacts from '../components/Contacts';
import Cart from '../components/Cart';
import Loading from '../components/Loading';
import { v4 as uuidv4 } from 'uuid';
import NotFound from '../components/NotFound';
import Home from '../components/Home';
const Root = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]); //add id and quan prop after fetching
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const productsInCart =
    products && products.filter((item) => item.quantity > 0);
  //this one not run again when mount Product component, because i fetch in parent comp. i think if i fetch in Product Comp, it will fetch every time i mount
  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((res) => {
        // setLoading(true);
        if (res.ok) {
          return new Promise((resolve) =>
            setTimeout(() => {
              resolve(res.json());
            }, 3000)
          ); //DONT FORGET TO RETURN HERE
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
        // setTimeout(() => setProducts(newData), 3000); //imitate loading (DONT DO THIS, THIS BUG(WRONG THINKING, THIS ONE ONLY DELAY SETSTATE, NOT DELAY PROMISE RESOLVE))
        setProducts(newData);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false)); //dont forget callback, we dont want to invoke immediately
    // return () => {
    //   setLoading(true);
    // };
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
      <div className="flex flex-col sticky top-0 bg-white md:flex-row">
        <div className="text-center md:text-left md:mr-auto">
          <Link to="/" className="mr-auto text-3xl md:text-5xl">
            {' '}
            FakeShop{' '}
          </Link>
        </div>
        <div className="flex gap-10 text-xl justify-center items-center md:text-3xl">
          <Link to="/"> Home </Link>
          <Link to="/products"> Products </Link>
          <Link to="/contact"> Contact </Link>
          <Link
            to="/cart"
            className="flex flex-col justify-center items-center"
          >
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
            <div className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900">
              {/* {totalQuantity} */}
              {productsInCart.length}
            </div>
          </Link>
        </div>
      </div>
      {/* content */}
      {/* second products to handle 'undefined' rendering (first render hasnt fetched yet) */}
      {/* why this line below, if i use && loading, it wont show Loading comp? */}
      {name === 'products' && loading && <Loading />}
      {name === 'products' && !loading && (
        <Products
          productDataArray={products}
          handleAddProductToCart={handleAddProductToCart}
          handleDecreaseProductToCart={handleDecreaseProductToCart}
        />
      )}
      {name === 'contact' && <Contacts />}
      {name === 'cart' && productsInCart.length === 0 && (
        <h1>You havent put anything in the cart</h1>
      )}
      {name === 'cart' && productsInCart.length > 0 && (
        <Cart
          productsInCart={productsInCart}
          handleAddProductToCart={handleAddProductToCart}
          handleDecreaseProductToCart={handleDecreaseProductToCart}
        />
      )}
      {/* check if name is not one of item in array, we go Notfound */}
      {name && !['products', 'contact', 'cart'].includes(name) && <NotFound />}
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
