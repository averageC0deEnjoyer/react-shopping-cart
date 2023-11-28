import { useNavigate, useRouteError } from 'react-router-dom';
import { useEffect } from 'react';
export default function ErrorPage() {
  const navigate = useNavigate();

  const error = useRouteError();

  useEffect(() => {
    setTimeout(() => {
      navigate('/'); //other options is can use navigate to back 1 page . (-1)
    }, 3000);
  }, []);

  return (
    <div
      id="error-page"
      className="flex flex-col gap-10 justify-center items-center mt-20"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
