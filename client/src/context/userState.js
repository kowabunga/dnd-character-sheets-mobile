import { useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './userReducer';
import axios from 'axios';
import {
  SET_JWT,
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  SIGN_IN_USER_FAIL,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
  SIGN_USER_OUT,
  REMOVE_USER_SIGN_UP_ERROR,
  REMOVE_USER_SIGN_IN_ERROR,
} from '../types/UserTypes';

const UserState = props => {
  const initialState = {
    user: {},
    jwt: null,
    loading: false,
    createUserError: null,
    signInUserError: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const { user, jwt, createUserError, signInUserError, loading } = state;

  const retrieveOrSaveJWT = token => {
    if (localStorage.getItem('dndtogojwt') !== null) {
      dispatch({ type: SET_JWT, payload: localStorage.getItem('dndtogojwt') });
    } else {
      token !== null &&
        token !== undefined &&
        localStorage.setItem('dndtogojwt', token);
    }
  };

  const logUserOut = () => {
    if (localStorage.getItem('dndtogojwt') !== null) {
      localStorage.removeItem('dndtogojwt');
    }
    dispatch({ type: SIGN_USER_OUT });
  };

  const signUpUser = async ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }) => {
    try {
      dispatch({ type: CREATE_USER_REQUEST });

      const { data } = await axios.post(
        '/api/user',
        {
          firstName,
          lastName,
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

      retrieveOrSaveJWT(data.token);
    } catch (error) {
      console.log(typeof error);
      console.log([error]);
      dispatch({
        type: CREATE_USER_FAIL,
        payload: error.response && error.response.data,
      });
    }
  };

  const signInUser = async ({ email, password }) => {
    try {
      dispatch({ type: SIGN_IN_USER_REQUEST });

      const { data } = await axios.post(
        '/api/auth',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      dispatch({ type: SIGN_IN_USER_SUCCESS, payload: data });

      retrieveOrSaveJWT(data);
    } catch (error) {
      // console.log([error]);
      console.log(error.response.data);
      dispatch({
        type: SIGN_IN_USER_FAIL,
        payload: error.response && error.response.data,
      });
    }
  };

  const clearAlert = type => {
    switch (type) {
      case 'IN':
        dispatch({ type: REMOVE_USER_SIGN_IN_ERROR });
      case 'UP':
        dispatch({ type: REMOVE_USER_SIGN_UP_ERROR });
      default:
        break;
    }
  };

  return (
    <UserContext.Provider
      value={{
        retrieveOrSaveJWT,
        signUpUser,
        signInUser,
        logUserOut,
        clearAlert,
        user,
        jwt,
        createUserError,
        signInUserError,
        loading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
