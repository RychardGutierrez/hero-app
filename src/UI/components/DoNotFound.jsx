import { useNavigate } from 'react-router-dom';

import { handleReturnHome } from './../tools/handles';

const DoNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center">Ups Hero Do not found</h1>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-link"
          onClick={() => handleReturnHome(navigate)}
        >
          Return Home
        </button>
      </div>
    </>
  );
};

export default DoNotFound;
