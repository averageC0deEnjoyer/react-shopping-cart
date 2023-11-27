import ProductDetail from './ProductDetail';

const Products = ({
  productDataArray,
  handleAddProductToCart,
  handleDecreaseProductToCart,
}) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center ml-10 mr-10 md:grid md:grid-cols-3 md:gap-10 md:place-items-center ">
      {productDataArray.map((item) => (
        <ProductDetail
          key={item.id}
          id={item.id}
          product={item}
          handleAddProductToCart={handleAddProductToCart}
          handleDecreaseProductToCart={handleDecreaseProductToCart}
        />
      ))}
    </div>
  );
};

export default Products;
