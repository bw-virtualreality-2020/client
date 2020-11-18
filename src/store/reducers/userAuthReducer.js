import {ADD_USER, REGISTER_ERR, REGISTER_SUCCESS} from '../actions/registerUser';
import { LOGIN_ERR, LOGIN_SUCCESS, START_LOGIN } from '../actions/loginUser';
import { LOGOUT_ERR, LOGOUT_SUCCESS, START_LOGOUT } from '../actions/logoutUser';
const { configs } = require("../../config");

const initialState = {
    loading: false,
    authenticated: false,
    message: '',
    token: localStorage.getItem(configs.TOKEN),
    type: localStorage.getItem(configs.TYPE),
    newUser: {},
    user: {},
    error: ''
}

function userAuthReducer(state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case ADD_USER:
            
            return {...state, loading: true};
        case REGISTER_SUCCESS:
            // console.log(payload);
            return {...state, loading: false, authenticated: true, newUser: payload.user, token: payload.token, type: payload.user.role}
        case REGISTER_ERR:
            return {...state, loading: false, error: payload.message}
        case START_LOGIN:
            return { ...state, loading: true }
        case LOGIN_SUCCESS:
            return { ...state, loading: false, authenticated: true, message: payload.message, token: payload.token, type: payload.user.role, user: payload.user }
        case LOGIN_ERR:
            return { ...state, loading: false, error: payload.message }
        case START_LOGOUT:
            return { ...state, loading: true }
        case LOGOUT_SUCCESS:
            return { ...state, loading: false, authenticated: false, message: '', token: '', user: {}, newUser: {} }
        case LOGOUT_ERR:
            return { ...state, loading: false, error: 'Logout Failed' }
        default:
            return state
    }
}

export default userAuthReducer