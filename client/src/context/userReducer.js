import {
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
} from '../types/UserTypes';

export default (state, action) => {
  const { type, payload } = action;
  console.log([type, payload]);
  switch (type) {
    case CREATE_USER_REQUEST:
      console.log('we are at create user request');
      return {
        ...state,
        loading: true,
      };

    case CREATE_USER_SUCCESS:
      console.log('we are at create user success');

      return {
        ...state,
        user: payload.createdUser,
        jwt: payload.token,
        loading: false,
        createUserError: null,
      };

    case CREATE_USER_FAIL:
      console.log('we are at create user fail');
      return {
        ...state,
        createUserError: payload,
        loading: false,
      };
    default:
      break;
  }
};
