import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from '../constants/userConstants';

const initialState = {
  users: [],
  loading: false,
  error: [],
};
export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        loading: true,
        users: [],
      };
    case USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.paylaod,
      };
    case USER_LIST_FAIL:
      return {
        loading: false,
        error: action.paylaod,
      };
    default:
      return state;
  }
};
