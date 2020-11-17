import axios from 'axios';
import { configs } from '../../config';

export const ADD_USER = "ADD_USER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERR = "REGISTER_ERR";

const registerUser = (newUsr) => dispatch => {
    dispatch({type: ADD_USER});

    axios
    .post(`${configs.API_ENDPOINT}/auth/register`, newUsr)
    .then(({data}) => {
        window.localStorage.setItem(configs.TOKEN, data.token)
        dispatch({type: REGISTER_SUCCESS, payload: data})
    })
    .catch(({response: {data}}) => {
        dispatch({type: REGISTER_ERR, payload: data})
    })
}

export default registerUser