import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/userContext';
import Alert from '../components/Alert';

const SignInPage = () => {
  const userContext = useContext(UserContext);
  const { signInUser, signInUserError, jwt, clearAlert } = userContext;

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // If jwt is present (i.e. user has signed in), redirect to user page
  useEffect(() => {
    if (jwt) {
      navigate('/user', { replace: true });
    }

    return () => {
      clearAlert('IN');
    };
  }, [jwt]);

  const submitHandler = e => {
    e.preventDefault();
    signInUser({ email, password });
  };

  return (
    <div className='container p-5'>
      <h1 className='display-5 text-center text-capitalize'>
        continue the adventure
      </h1>
      {signInUserError && (
        <Alert
          alert={signInUserError.msg}
          color='danger'
          icon='bi bi-exclamation-circle'
          component={
            signInUserError.msg === 'Email not registered. Sign up.' && (
              <Link to='/signup' className='d-block'>
                Sign Up
              </Link>
            )
          }
        />
      )}
      <div className='row'>
        <form
          onSubmit={e => submitHandler(e)}
          className='p-3 col col-xl-6 mx-auto'
        >
          <div className='mb-4'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='passwordOne'>Password</label>
            <input
              type='password'
              className='form-control'
              id='passwordOne'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <div className='form-text'>
              Your password must be at least eight (8) characters long.
            </div>
          </div>
          <button type='submit' className='btn btn-secondary text-light mb-4'>
            Sign In
          </button>
        </form>
      </div>
      <div className='row'>
        <div className='p-3 col col-xl-6 mx-auto'>
          Not a member yet? <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
