import axios from 'axios';
import { configs } from '../../config';

export const ADD_USER = "ADD_USER";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_ERR = "USER_ERR";

const registerUser = (newUsr) => dispatch => {
    dispatch({type: ADD_USER});

    axios
    .post(`${configs.API_ENDPOINT}/auth/register`, newUsr)
    .then(({data}) => {
        window.localStorage.setItem(configs.TOKEN, data.token)
        dispatch({type: USER_SUCCESS, payload: data})
    })
    .catch(({response: {data}}) => {
        dispatch({type: USER_ERR, payload: data})
    })
}

export default registerUser