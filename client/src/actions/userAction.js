import axios from 'axios';
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  // USER_LIST_FAIL,
} from '../constants/userConstants';

// const API_URL = 'http://localhost:5000/api/v1/';
const API_URL = 'http://localhost:5000/api/v1/jhkjhcjkhkjhjhv';

export const getAllUsers = async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { data } = await axios.get(`${API_URL}users/dkhkjhfkhfkjhfkhfkjhkf`);
    console.log('Data from the api: ', data);
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    // dispatch({
    //   USER_LIST_FAIL,
    //   payload:j
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // });
  }
};
