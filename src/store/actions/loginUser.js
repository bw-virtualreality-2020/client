import axios from 'axios';
import { configs } from '../../config';

export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERR = "LOGIN_ERR";

const loginUser = (credentials) => dispatch => {


    dispatch({type: START_LOGIN});

    axios
    .post(`${configs.API_ENDPOINT}/auth/login`, credentials)
    .then(({data}) => {
        window.localStorage.setItem(configs.TOKEN, data.token)
        window.localStorage.setItem(configs.TYPE, data.user.user_role)
        dispatch({type: LOGIN_SUCCESS, payload: data})
    })
    .catch(({response: {data}}) => {
        dispatch({type: LOGIN_ERR, payload: data})
    })
}

export default loginUser