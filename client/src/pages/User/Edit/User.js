import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../context/userContext';
import Alert from '../../../components/Alert';
import Spinner from '../../../components/Spinner';

const UserEditPage = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const {
    clearAlert,
    user: { firstName, lastName, email },
    editUserError,
    editUserInfo,
    editUserSuccess,
    removeUserSuccessMsg,
  } = userContext;

  const [firstNameInput, setFirstName] = useState(firstName);
  const [lastNameInput, setLastName] = useState(lastName);
  const [emailInput, setEmailInput] = useState(email);

  const [loader, showLoader] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();

    showLoader(true);

    const data = await editUserInfo({
      firstNameInput,
      lastNameInput,
      emailInput,
    });

    showLoader(false);
  };

  useEffect(() => {
    if (editUserSuccess) {
      navigate('/user/account-info', { replace: true });
    }

    return () => {
      clearAlert('UP');
      removeUserSuccessMsg();
    };
  }, [editUserSuccess]);

  return (
    <>
      {loader && <Spinner />}
      {!loader && (
        <section className='container p-5'>
          {editUserError && (
            <Alert
              alert={editUserError.msg}
              color='danger'
              icon='bi bi-exclamation-circle'
            />
          )}

          <h2>Edit Information</h2>
          <p className='lead'>Here's to making you more like you.</p>

          <form onSubmit={e => submitHandler(e)}>
            <div className='row mb-4'>
              <div className='col'>
                <label htmlFor='firstName'>First Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='firstName'
                  value={firstNameInput}
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div className='row mb-4'>
              <div className='col'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='lastName'
                  value={lastNameInput}
                  onChange={e => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className='row mb-4'>
              <div className='col'>
                <label htmlFor='email'>Email Address</label>
                <input
                  type='email'
                  className='form-control'
                  id='emailAddress'
                  value={emailInput}
                  onChange={e => setEmailInput(e.target.value)}
                />
              </div>
            </div>

            <button className='btn btn-primary text-light mb-4'>
              Submit Changes
            </button>
          </form>
        </section>
      )}
    </>
  );
};
export default UserEditPage;
