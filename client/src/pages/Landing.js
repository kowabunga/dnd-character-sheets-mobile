import { Link } from 'react-router-dom';
import unsplashMoon from '../images/undraw_moonlight_-5-ksn.svg';
import unsplashAdventure from '../images/undraw_adventure_map_hnin.svg';
const LandingPage = () => {
  return (
    <>
      {/* Header Splash */}
      <section className='bg-dark w-100 d-flex position-relative'>
        <img
          src={unsplashMoon}
          alt='drawing of night sky with moonlight and person at campfire'
          className='img-fluid mx-auto no-interact'
        />
        <div className='text-white position-absolute top-50 start-50 translate-middle'>
          <h1 className='display-4 slight-text-shadow'>
            Take a Rest - Short or Long
          </h1>
          <p className='d-none d-sm-block lead slight-text-shadow'>
            You've journeyed long and far. Traversed mountains, fought monsters,
            and remained victorious.
          </p>
          <p className='text-muted d-none d-sm-block slight-text-shadow'>
            Let us keep track of it all for you.
          </p>
        </div>
      </section>
      {/* Cards */}
      <section className='p-5 container'>
        <h2 className='text-center text-capitalize display-5 mb-4'>
          Let us handle the work for you
        </h2>
        <div className='d-lg-flex align-items-center justify-content-between '>
          <div className='card w-100 h-100  w-sm-50 m-2 border-secondary shadow-sm card-background'>
            <div className='card-body'>
              <div className='icon-size mb-3 text-secondary text-center'>
                <i className='bi bi-file-person'></i>
              </div>
              <div className='card-title lead fs-3 text-primary'>
                Characters
              </div>
              <div className='card-subtitle text-muted mb-3'>Dream On</div>
              <p className='card-text'>
                Add your characters - their personalities, skills, and riches.
                Keep track of how they grow to use to your advantage.
              </p>
              <div className='d-flex align-items-center justify-content-around'>
                <Link to='/learn-more/characters'>
                  <button className='btn btn-secondary text-light'>
                    Learn More
                  </button>
                </Link>
                <Link to='/user/character/create'>
                  <button className='btn btn-outline-secondary'>
                    Create Character
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='card w-100 h-100 w-sm-50 m-2 border-secondary shadow-sm card-background'>
            <div className='card-body'>
              <div className='icon-size mb-3 text-secondary text-center'>
                <i className='bi bi-door-open'></i>
              </div>
              <div className='card-title lead fs-3 text-primary'>Campaigns</div>
              <div className='card-subtitle text-muted mb-3'>Adventure On</div>
              <p className='card-text'>
                Open the door to a world of magic and dungeons. Keep track of
                who's in your campaign, their levels and more.
              </p>
              <div className='d-flex align-items-center justify-content-around'>
                <Link to='/learn-more/campaigns'>
                  {/*className='my-2'*/}
                  <button className='btn btn-secondary text-light'>
                    Learn More
                  </button>
                </Link>
                <Link to='/user/campaign/create'>
                  <button className='btn btn-outline-secondary'>
                    Create Campaign
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start Now */}
      <section className='p-5 bg-dark text-light'>
        <div className='d-md-flex align-items-center justify-content-around'>
          <div>
            <h2 className=' text-capitalize display-5 mb-4'>
              Create Today, Conquer Tomorrow
            </h2>
            <p className='lead'>
              Build your campaigns, create your characters and conquer the world
              of your creations.
            </p>
            <div className='d-md-flex align-items-center justify-content-around'>
              <button className='btn btn-md-lg btn-outline-light m-1'>
                Create Character
              </button>
              <button className='btn btn-md-lg btn-outline-light m-1'>
                Create Campaign
              </button>
            </div>
          </div>
          <div>
            <img
              src={unsplashAdventure}
              alt='person on adventure drawing'
              className='img-fluid'
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default LandingPage;
