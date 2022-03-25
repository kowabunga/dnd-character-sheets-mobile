import { useContext } from 'react';
import UserContext from '../../context/userContext';
import { Link } from 'react-router-dom';

const AccountInfoPage = () => {
  const userContext = useContext(UserContext);
  const {
    user: { firstName, lastName, email },
  } = userContext;

  return (
    <section>
      <div>
        <h1 className='text-primary'>All About You</h1>
        <p className='lead'>Need to change something? Check below!</p>
        <hr />
        <h2>User Information:</h2>
        <p className='h5'>Name:</p>

        <p className='ps-2 underline'>
          {firstName} {lastName}
        </p>
        <p className='h5'>Email:</p>
        <p className='ps-2'>{email}</p>

        <p>If you want to edit any of the above information, click below.</p>
        <Link to='/user/edit-user' className='btn btn-primary  text-white'>
          Edit User Information
        </Link>
        <hr />
        <h2>Password:</h2>
        <p>Edit your password below.</p>
        <Link to='/user/edit-password' className='btn btn-primary text-white'>
          Edit Password
        </Link>
      </div>
    </section>
  );
};
export default AccountInfoPage;
