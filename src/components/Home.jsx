import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10">
      <h1 className="text-3xl font-light text-blue-600 text-center">
        Landing Page
      </h1>
      <h2 className="text-2xl font-bold text-center">
        what are u waiting for?
      </h2>
      <Link
        to="/products"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to products page
      </Link>
    </div>
  );
};

export default Home;
