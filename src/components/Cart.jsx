import CartItem from './CartItem';

const Cart = ({
  productsInCart,
  handleAddProductToCart,
  handleDecreaseProductToCart,
}) => {
  console.log(productsInCart);
  const totalPriceFromAllItems =
    productsInCart &&
    productsInCart.reduce((acc, obj) => {
      return acc + obj.quantity * obj.price; //DONT FORGET RETURN
    }, 0);
  console.log(totalPriceFromAllItems);
  return (
    <>
      {productsInCart.map((item) => {
        return (
          <CartItem
            key={item.id}
            data={item}
            handleAddProductToCart={handleAddProductToCart}
            handleDecreaseProductToCart={handleDecreaseProductToCart}
          />
        );
      })}
      <p>End Price: {totalPriceFromAllItems.toFixed(2)}</p>
    </>
  );
};

export default Cart;
