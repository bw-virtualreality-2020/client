import {ADD_USER, USER_SUCCESS, USER_ERR} from '../actions/registerUser'
const { configs } = require("../../config");

const initialState = {
    inProgress: false,
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
            
            break;
        default:
            break;
    }
}