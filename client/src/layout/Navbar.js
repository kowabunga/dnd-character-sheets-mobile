import { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserContext from '../context/userContext';
const Navbar = () => {
  const userContext = useContext(UserContext);
  const {
    jwt,
    logUserOut,
    user: { firstName },
  } = userContext;

  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          D&D ToGo
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarMain'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarMain'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <NavLink to='/learn-more' className='nav-link'>
                Learn More
              </NavLink>
            </li>
            {jwt && (
              <li className='nav-item dropdown '>
                <a
                  href='#'
                  className='nav-link dropdown-toggle'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                >
                  {`Hey${firstName ? `, ${firstName}` : ''} `}
                </a>
                <ul className='dropdown-menu dropdown-menu-dark'>
                  <li className='dropdown-item'>
                    <NavLink to='/user/#' className='nav-link'>
                      Account
                    </NavLink>
                  </li>
                  <li className='dropdown-item'>
                    <NavLink to='/user/characters' className='nav-link'>
                      Characters
                    </NavLink>
                  </li>
                  <li className='dropdown-item'>
                    <NavLink to='/user/campaigns' className='nav-link'>
                      Campaigns
                    </NavLink>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li className='dropdown-item' onClick={() => logUserOut()}>
                    <NavLink className='nav-link' role='button' to='/#'>
                      Sign Out
                    </NavLink>
                  </li>
                </ul>
              </li>
            )}
            {!jwt && (
              <li className='nav-item'>
                <NavLink to='/signin' className='nav-link'>
                  Sign In
                </NavLink>
              </li>
            )}
            {!jwt && (
              <li className='nav-item'>
                <NavLink to='/signup' className='nav-link'>
                  Sign Up
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
