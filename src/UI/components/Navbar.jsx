import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { AuthContext } from './../../auth/authContext';
import { handleLogout } from '../tools/handles';
import {
  TITLE_ASSOCIATIONS,
  TITLE_MARVEL,
  TITLE_DC,
  LOGOUT,
  SEARCH,
} from './../../shared/constants';

import { actionLogout } from '../../login/actions';

const Navbar = () => {
  const navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark  bg-dark">
      <Link className="navbar-brand ms-2" to="/">
        {TITLE_ASSOCIATIONS}
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive && 'active'}`
            }
            to="/marvel"
          >
            {TITLE_MARVEL}
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive && 'active'}`
            }
            to="/dc"
          >
            {TITLE_DC}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive && 'active'}`
            }
            to="/search"
          >
            {SEARCH}
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">
            {user.name?.toUpperCase()}
          </span>
          <button
            className="nav-item nav-link btn"
            onClick={() => handleLogout(navigate, actionLogout(), dispatch)}
          >
            {LOGOUT}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
