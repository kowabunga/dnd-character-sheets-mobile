import { Outlet, NavLink, useLocation } from 'react-router-dom';
const UserPage = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <section>
      <div className='row gx-0 '>
        <div className='col-xs-12 col-sm-4 col-md-3'>
          <div className='d-flex align-items-start justify-content-center bg-dark h-100'>
            <ul
              className='nav flex-column nav-pills w-100 h-100'
              id='user-pills-tab'
              role='tablist'
            >
              <li className='nav-item mb-1'>
                <NavLink
                  className='nav-link special-nav-link'
                  id='user-pills-home-tab'
                  to='/user/characters'
                >
                  Characters
                </NavLink>
              </li>
              <li className='nav-item mb-1'>
                <NavLink
                  className='nav-link special-nav-link'
                  id='user-pills-campaigns-tab'
                  to='/user/campaigns'
                >
                  Campaigns
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className={`nav-link special-nav-link ${
                    location.pathname === '/user' && 'active'
                  } `}
                  id='user-pills-settings-tab'
                  to='/user/#'
                >
                  Account
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-xs-12 col-sm-8 col-md-9 p-3'>
          <Outlet />
        </div>
      </div>
    </section>
  );
};
export default UserPage;
