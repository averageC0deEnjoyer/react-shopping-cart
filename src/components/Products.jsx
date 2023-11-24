import ProductDetail from './ProductDetail';

const Products = ({
  productDataArray,
  handleAddProductToCart,
  handleDecreaseProductToCart,
}) => {
  return (
    <div className="grid grid-cols-3 gap-10 ml-10 mr-10">
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
