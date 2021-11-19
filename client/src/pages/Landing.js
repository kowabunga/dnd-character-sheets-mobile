import unsplashMoon from '../images/undraw_moonlight_-5-ksn.svg';
const LandingPage = () => {
  return (
    <>
      <section className='bg-dark w-100 d-flex position-relative'>
        <img
          src={unsplashMoon}
          alt='drawing of night sky with moonlight and person at campfire'
          className='img-fluid mx-auto'
        />
        <div className='text-white position-absolute top-50 start-50 translate-middle'>
          <h1 className='display-4 slight-text-shadow'>
            Take a Rest - Short or Long
          </h1>
          <p className='d-sm-lead slight-text-shadow'>
            You've journeyed long and far. Traversed mountains, fought monsters,
            and remained victorious.
          </p>
          <p className='text-muted d-none d-sm-block slight-text-shadow'>
            Let us keep track of it all for you.
          </p>
        </div>
      </section>
      <section className='container p-4'>
        <div className='d-sm-flex align-items-center justify-content-between card-row-height'>
          <div className='card w-100 w-sm-50 m-2 border-secondary hover-border h-100'>
            <div className='card-body'>
              <div className='icon-size mb-3 text-secondary text-center'>
                <i className='bi bi-door-open'></i>
              </div>
              <div className='card-title lead fs-3 text-primary'>Campaigns</div>
              <div className='card-subtitle text-muted mb-3'>Adventure On</div>
              <p className='card-text'>
                Open the door to a world of magic, and dungeons. Keep track of
                who's in your campaign, their levels and more.
              </p>
            </div>
          </div>
          <div className='card w-100 w-sm-50 m-2 border-secondary hover-border h-100'>
            <div className='card-body'>
              <div className='icon-size mb-3 text-secondary text-center'>
                <i class='bi bi-file-person'></i>
              </div>
              <div className='card-title lead fs-3 text-primary'>
                Characters
              </div>
              <div className='card-subtitle text-muted mb-3'>Dream On</div>
              <p className='card-text'>
                Add your characters - their personalities, skills, and riches.
                Keep track of how they grow to use to your advantage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LandingPage;