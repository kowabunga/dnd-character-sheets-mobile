import { useEffect } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import undrawEducation from '../../images/undraw_education_f8ru.svg';
const LearnMore = () => {
  const navigate = useNavigate(),
    location = useLocation();
  useEffect(() => {
    if (location.pathname === '/learn-more') {
      navigate('/learn-more/characters', { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <section className='bg-dark text-light text-center p-5'>
        <div className='d-md-flex align-items-center justify-content-around'>
          <div>
            <h1 className='display-4'>Learn More</h1>
            <p className='lead'>
              We offer you, the Dungeon Master or the Player, the ability to
              organize, read, and update your characters and campaigns easily.
            </p>
          </div>
          <div>
            <img
              src={undrawEducation}
              alt='drawing of person learning'
              className='img-fluid'
            />
          </div>
        </div>
        <div className='mt-5 pt-4'>
          <h2 className='mb-3'>
            We offer services to help make your Dungeons & Dragons play seamless
            and convenient.
          </h2>
          <p className='fs-5'>
            As a player you can easily create a character and update its
            information when necessary - never loose that character sheet again!
          </p>
          <p className='fs-5'>
            As a Dungeon Master, create and organize your campaigns, items,
            who's playing in your campaigns and their characters and more.
          </p>
        </div>
      </section>
      <section className='mt-5 pb-3 border-bottom'>
        <h2 className='text-center display-5'>Begin Today!</h2>
        <div className='d-flex align-items-center justify-content-around'>
          <button className='btn btn-lg btn-secondary'>Create Character</button>
          <button className='btn btn-lg btn-outline-secondary'>
            Create Campaign
          </button>
        </div>
      </section>
      <section className='p-5'>
        <h3 className='text-center text-capitalize h2'>Learn More</h3>
        <nav>
          <ul className='nav nav-tabs d-flex justify-content-center'>
            <li className='nav-item mx-1'>
              <NavLink to='/learn-more/characters' className='nav-link'>
                Characters
              </NavLink>
            </li>
            <li className='nav-item mx-1'>
              <NavLink to='/learn-more/campaigns' className='nav-link'>
                Campaigns
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <Outlet />
    </>
  );
};
export default LearnMore;
