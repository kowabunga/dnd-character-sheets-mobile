import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from '../context/userContext';
import Alert from '../components/Alert';

// @TODO Redirect to user page after user is created
const SignUpPage = () => {
  const userContext = useContext(UserContext);
  const { signUpUser, createUserError } = userContext;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    signUpUser({ name, email, password, confirmPassword });
  };

  return (
    <div className='container p-5'>
      <h1 className='display-5 text-center text-capitalize'>
        begin your adventure today
      </h1>
      {createUserError !== null && (
        <Alert
          alert={createUserError.msg}
          color='danger'
          icon='bi bi-exclamation-circle'
        />
      )}
      <div className='row'>
        <form
          onSubmit={e => submitHandler(e)}
          className='p-3 col col-xl-6 mx-auto'
        >
          <div className='mb-4'>
            <label htmlFor='name' className='form-label '>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
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
