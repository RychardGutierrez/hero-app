import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from './../../auth/authContext';
import { handleLogin } from '../../UI/tools/handles';
import { actionLogin } from './../actions';

import './login.css';
import { getImageHero } from '../../shared/constants';

const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  return (
    <div className="center-login text-center">
      <div className="form-signin">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <img
          class="mb-4 img-user"
          src={getImageHero('user-lucas')}
          alt=""
          width="150"
          height="150"
        />
        <button
          class="w-100 btn btn-lg btn-primary"
          onClick={() =>
            handleLogin(navigate, actionLogin('lucas duck'), dispatch)
          }
        >
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">© 2021</p>
      </div>
    </div>
  );
};

export default LoginScreen;
