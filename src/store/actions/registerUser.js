import axios from 'axios';
import { configs } from '../../config';

export const ADD_USER = "ADD_USER";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_ERR = "USER_ERR";

const registerUser = (newUsr) => {
    dispatch({type: ADD_USER});

    axios.post(configs.API_ENDPOINT)
}

export default registerUser