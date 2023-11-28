import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  });

  return (
    <div>
      <h1>NotFound Page</h1>
      <h2>test</h2>
    </div>
  );
};

export default NotFound;
