import axios from 'axios';
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from '../constants/userConstants';

const API_URL = 'http://localhost:5000/api/v1/';

export const getUsers = async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { data } = await axios.get(`${API_URL}/users/`);
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
