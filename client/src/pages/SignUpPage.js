import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/userContext';
import Alert from '../components/Alert';

const SignUpPage = () => {
  const userContext = useContext(UserContext);
  const { signUpUser, createUserError, jwt, clearAlert } = userContext;

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // If jwt is present (i.e. user account has been created), redirect to user page
  useEffect(() => {
    if (jwt) {
      navigate('/user', { replace: true });
    }

    //Cleans up any alerts after page is exited
    //Without this, error will persist after page change
    return () => {
      clearAlert('UP');
    };
  }, [jwt]);
  // })

  const submitHandler = e => {
    e.preventDefault();
    signUpUser({ firstName, lastName, email, password, confirmPassword });
  };

  return (
    <div className='container p-5'>
      <h1 className='display-5 text-center text-capitalize'>
        begin your adventure today
      </h1>
      {createUserError && (
        <Alert
          alert={createUserError.msg}
          color='danger'
          icon='bi bi-exclamation-circle'
          component={
            <Link to='/signin' className='d-block'>
              Sign In
            </Link>
          }
        />
      )}
      <div className='row'>
        <form
          onSubmit={e => submitHandler(e)}
          className='p-3 col col-xl-6 mx-auto'
        >
          <div className='row mb-4'>
            <div className='col'>
              <label htmlFor='name' className='form-label '>
                First Name
              </label>
              <input
                type='text'
                className='form-control'
                id='firstName'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className='col'>
              <label htmlFor='name' className='form-label '>
                Last Name
              </label>
              <input
                type='text'
                className='form-control'
                id='lastName'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
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
          <div className='mb-4'>
            <label htmlFor='passwordTwo'>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              id='passwordTwo'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
            <div className='form-text'>Please re-enter your password.</div>
          </div>
          <button type='submit' className='btn btn-secondary text-light mb-4'>
            Sign Up
          </button>
        </form>
      </div>
      <div className='row'>
        <div className='p-3 col col-xl-6 mx-auto'>
          Already a member? <Link to='/signin'>Sign In</Link>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
