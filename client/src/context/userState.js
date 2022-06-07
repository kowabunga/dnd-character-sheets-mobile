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
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_FAIL,
  GET_USER_INFO_SUCCESS,
  EDIT_USER_INFO_REQUEST,
  EDIT_USER_INFO_SUCCESS,
  EDIT_USER_INFO_FAIL,
  CLEAR_USER_EDIT_SUCCESS_MSG,
} from '../types/UserTypes';

const UserState = props => {
  const initialState = {
    user: {},
    jwt: null,
    loading: false,
    createUserError: null,
    signInUserError: null,
    editUserError: null,
    editUserSuccess: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const {
    user,
    jwt,
    createUserError,
    signInUserError,
    loading,
    editUserError,
    editUserSuccess,
  } = state;

  const retrieveOrSaveJWT = token => {
    if (localStorage.getItem('dndtogojwt') !== null && jwt === null) {
      dispatch({ type: SET_JWT, payload: localStorage.getItem('dndtogojwt') });

      //If JWT is present, get user info from DB
      getUserData();
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

  const getUserData = async () => {
    try {
      dispatch({ type: GET_USER_INFO_REQUEST });

      const tempJwt =
        localStorage.getItem('dndtogojwt') !== null &&
        localStorage.getItem('dndtogojwt');

      const { data } = await axios.get('/api/user', {
        headers: {
          'x-auth-token': tempJwt,
        },
      });

      console.log(data);
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: GET_USER_INFO_FAIL,
        payload: error.response && error.response.data,
      });

      logUserOut();
    }
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
      getUserData();
    } catch (error) {
      dispatch({
        type: SIGN_IN_USER_FAIL,
        payload: error.response && error.response.data,
      });
    }
  };

  const editUserInfo = async ({
    firstNameInput,
    lastNameInput,
    emailInput,
    oldPassword,
    newPassword,
    confirmNewPassword,
  }) => {
    console.log('here');
    try {
      const tempJwt =
        localStorage.getItem('dndtogojwt') !== null &&
        localStorage.getItem('dndtogojwt');

      dispatch({ type: EDIT_USER_INFO_REQUEST });

      const { data } = await axios.put(
        '/api/user',
        {
          firstName: firstNameInput,
          lastName: lastNameInput,
          email: emailInput,
          oldPassword,
          newPassword,
          confirmNewPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': tempJwt,
          },
        }
      );

      dispatch({ type: EDIT_USER_INFO_SUCCESS, payload: data });

      return data;
    } catch (error) {
      dispatch({
        type: EDIT_USER_INFO_FAIL,
        payload: error.response && error.response.data,
      });
    }
  };

  const clearAlert = type => {
    switch (type) {
      case 'IN':
        dispatch({ type: REMOVE_USER_SIGN_IN_ERROR });
        break;
      case 'UP':
        dispatch({ type: REMOVE_USER_SIGN_UP_ERROR });
        break;
      default:
        break;
    }
  };

  const removeUserSuccessMsg = () => {
    dispatch({ type: CLEAR_USER_EDIT_SUCCESS_MSG });
  };

  return (
    <UserContext.Provider
      value={{
        retrieveOrSaveJWT,
        signUpUser,
        signInUser,
        logUserOut,
        clearAlert,
        getUserData,
        editUserInfo,
        removeUserSuccessMsg,
        user,
        jwt,
        createUserError,
        signInUserError,
        loading,
        editUserSuccess,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
