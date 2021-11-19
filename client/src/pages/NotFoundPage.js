import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className='container mt-5'>
      <h1>Woops! There's nothing here!</h1>
      <p className='lead'>
        We aren't quite sure <em>how</em> you got here, but fear not! Just in
        case you got lost, we made you a way to get home!
      </p>
      <Link to='/'>
        <button className='btn btn-primary '>Go Home</button>
      </Link>
    </section>
  );
};
export default NotFoundPage;
