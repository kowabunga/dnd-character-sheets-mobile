import {
  SET_JWT,
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  SIGN_IN_USER_FAIL,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
  SIGN_USER_OUT,
  REMOVE_USER_SIGN_IN_ERROR,
  REMOVE_USER_SIGN_UP_ERROR,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_FAIL,
} from '../types/UserTypes';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_JWT:
      return {
        ...state,
        jwt: payload,
      };

    case SIGN_USER_OUT:
      return {
        ...state,
        user: {},
        jwt: null,
        loading: false,
        createUserError: null,
        signInUserError: null,
      };

    case CREATE_USER_REQUEST:
    case SIGN_IN_USER_REQUEST:
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        user: payload,
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        user: payload.createdUser,
        jwt: payload.token,
        loading: false,
        createUserError: null,
        signInUserError: null,
      };

    case SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        jwt: payload,
        loading: false,
        createUserError: null,
        signInUserError: null,
      };

    case CREATE_USER_FAIL:
      return {
        ...state,
        createUserError: payload,
        loading: false,
      };

    case GET_USER_INFO_FAIL:
    case SIGN_IN_USER_FAIL:
      return {
        ...state,
        signInUserError: payload,
        loading: false,
      };

    case REMOVE_USER_SIGN_IN_ERROR:
      return {
        ...state,
        signInUserError: null,
      };

    case REMOVE_USER_SIGN_UP_ERROR:
      return {
        ...state,
        createUserError: null,
      };
    default:
      break;
  }
};