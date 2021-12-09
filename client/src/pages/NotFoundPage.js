import { Link } from 'react-router-dom';
import undrawRightWay from '../images/undraw_right_direction_tge8.svg';

const NotFoundPage = () => {
  return (
    <section className='container p-5 d-flex flex-column align-items-center justify-content-center '>
      <img
        src={undrawRightWay}
        alt='drawing of night sky with moonlight and person at campfire'
        className='img-fluid mx-auto'
      />
      <div className='mt-4'>
        <h1>Woops! There's nothing here!</h1>
        <p className='lead'>
          We aren't quite sure <em>how</em> you got here, but fear not! Just in
          case you got lost, we made you a way to get home!
        </p>
        <Link to='/'>
          <button className='btn btn-primary text-light'>Go Home</button>
        </Link>
      </div>
    </section>
  );
};
export default NotFoundPage;
