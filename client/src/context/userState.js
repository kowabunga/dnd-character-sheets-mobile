import { useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './userReducer';
import axios from 'axios';
import {
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
} from '../types/UserTypes';

const UserState = props => {
  const initialState = {
    user: {},
    jwt: null,
    loading: false,
    createUserError: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const { user, jwt, createUserError, loading } = state;

  const signUpUser = async ({ name, email, password, confirmPassword }) => {
    try {
      dispatch({ type: CREATE_USER_REQUEST });

      const { data } = await axios.post(
        'api/user',
        {
          name,
          email,
          password,
          confirmPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      dispatch({ type: CREATE_USER_SUCCESS, payload: data });
    } catch (error) {
      console.log(typeof error);
      console.log([error]);
      dispatch({
        type: CREATE_USER_FAIL,
        payload: error.response && error.response.data,
      });

      console.log('now were here');
    }
  };

  return (
    <UserContext.Provider
      value={{ signUpUser, user, jwt, createUserError, loading }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
