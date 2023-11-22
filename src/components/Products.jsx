const Products = () => {
  fetch('https://fakestoreapi.com/products/5')
    .then((res) => res.json())
    .then((result) => console.log(result));

  return (
    <>
      <h1>Products Page</h1>
      <h2>test</h2>
    </>
  );
};

export default Products;
