import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Landing Page</h1>
      <h2>test</h2>
      <Link to="/products">Go to products page</Link>
    </>
  );
};

export default Home;
