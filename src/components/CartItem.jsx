const CartItem = ({
  data,
  handleAddProductToCart,
  handleDecreaseProductToCart,
}) => {
  const { id, title, image, quantity, price } = data;
  return (
    <>
      <div className="bg-slate-200 flex flex-col justify-center items-center rounded-xlbg-slate-200 flex flex-col justify-center items-center rounded-xl">
        <img
          src={image}
          className="rounded-xl object-cover"
          width="100"
          height="200"
        />
        <p>{title}</p>
        <div className="flex">
          <button
            className="text-white bg-blue-700 enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl text-white px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-25"
            onClick={() => {
              handleDecreaseProductToCart(id);
            }}
          >
            -
          </button>
          <p>Qty : {quantity}</p>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl text-white px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              handleAddProductToCart(id);
            }}
          >
            +
          </button>
        </div>
        <p>Total Price : {price * quantity}</p>
      </div>
    </>
  );
};

export default CartItem;
