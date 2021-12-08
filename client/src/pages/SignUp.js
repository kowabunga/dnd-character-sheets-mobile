import { Link } from 'react-router-dom';
import axios from 'axios';
const SignUpPage = () => {
  const submitHandler = e => {
    e.preventDefault();
    console.log('Submitting...');
    axios.post('/user', {});
  };
  return (
    //   @TODO Maybe make grid columns to handle width?
    <div className='container p-5 '>
      <h1 className='display-5 text-center'>Join Today</h1>
      <form onSubmit={e => submitHandler(e)} className='p-3'>
        <div className='mb-4'>
          <label htmlFor='name' className='form-label '>
            Name
          </label>
          <input type='text' className='form-control' id='name' required />
          <div className='valid-feedback'>Awesome!</div>
          <div className='invalid-feedback'>Please enter your name.</div>
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-control' id='email' required />
          <div className='valid-feedback'>Awesome!</div>
          <div className='invalid-feedback'>Please enter a valid email.</div>
        </div>
        <div className='mb-4'>
          <label htmlFor='passwordOne'>Password</label>
          <input
            type='password'
            className='form-control'
            id='passwordOne'
            required
          />
          <div id='passwordOneInfo' className='form-text'>
            Your password must be at least eight (8) characters long.
          </div>
          <div className='valid-feedback'>Awesome!</div>
          <div className='invalid-feedback'>
            Please enter a valid password. It must be at least eight (8)
            characters long.
          </div>
        </div>
        <div className='mb-4'>
          <label htmlFor='passwordTwo'>Password</label>
          <input
            type='password'
            className='form-control'
            id='passwordTwo'
            required
          />
          <div id='passwordOneInfo' className='form-text'>
            Your password must be at least eight (8) characters long.
          </div>
          <div className='valid-feedback'>Awesome!</div>
          <div className='invalid-feedback'>
            Please enter a valid password. It must be at least eight (8)
            characters long.
          </div>
        </div>
        <button type='submit' className='btn btn-secondary text-light mb-4'>
          Sign Up
        </button>
      </form>
      <div className='p-3'>
        Already a member? <Link to='/signin'>Sign In</Link>
      </div>
    </div>
  );
};
export default SignUpPage;
