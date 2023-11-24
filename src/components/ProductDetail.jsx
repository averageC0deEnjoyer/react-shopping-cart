const ProductDetail = ({
  product,
  handleAddProductToCart,
  handleDecreaseProductToCart,
  id,
}) => {
  return (
    <div className="bg-slate-200 flex flex-col justify-center items-center rounded-xl">
      <h1 className="h-20">{product.title}</h1>
      <img
        src={product.image}
        className="rounded-xl object-cover"
        width="100"
        height="200"
      />
      <div className="flex">
        <button
          disabled={product.quantity === 0 ? true : false}
          className={`text-white bg-blue-700 enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl text-white px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-25`}
          onClick={() => handleDecreaseProductToCart(id)}
        >
          -
        </button>
        <p className="w-10 h-10 flex justify-center items-center">
          {product.quantity}
        </p>
        <button
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl text-white px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
          onClick={() => handleAddProductToCart(id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
