import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserContext from '../context/userContext';
const Navbar = () => {
  const userContext = useContext(UserContext);
  const { jwt } = userContext;

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
              <li className='nav-item'>
                <NavLink to='/user/campaigns' className='nav-link'>
                  Campaigns
                </NavLink>
              </li>
            )}
            {jwt && (
              <li className='nav-item'>
                <NavLink to='/user/characters' className='nav-link'>
                  Characters
                </NavLink>
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
