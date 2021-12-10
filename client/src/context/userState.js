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
    dispatch({ type: SIGN_USER_OUT });
  };

  const signUpUser = async ({ name, email, password, confirmPassword }) => {
    try {
      dispatch({ type: CREATE_USER_REQUEST });

      const { data } = await axios.post(
        '/api/user',
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
      dispatch({
        type: SIGN_IN_USER_FAIL,
        paylaod: error.response && error.response.msg,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        retrieveOrSaveJWT,
        signUpUser,
        signInUser,
        logUserOut,
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
