const ProductDetail = ({
  product,
  handleAddProductToCart,
  handleDecreaseProductToCart,
  id,
}) => {
  return (
    <div className="bg-slate-200 flex flex-col justify-center items-center rounded-xl max-w-sm overflow-auto w-1/2  p-5 max-h-md md:w-full lg:w-3/4 xl:w-1/2">
      <h1 className="h-20 text-center p-2">{product.title}</h1>
      <img
        src={product.image}
        className="w-full h-48 object-cover p-2 rounded-3xl"
      />
      <div className="flex justify-center items-center gap-2 flex-1">
        <button
          disabled={product.quantity === 0 ? true : false}
          className={`text-white bg-blue-700 enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl text-white px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-25`}
          onClick={() => handleDecreaseProductToCart(id)}
        >
          -
        </button>
        <div className="inline-flex items-center mb-2 justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
          {product.quantity}
        </div>
        <button
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl text-white px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
          onClick={() => handleAddProductToCart(id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
