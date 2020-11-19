import { axiosWithAuth } from '../../components/utils/axiosWithAuth';
import { configs } from '../../config';

export const START_CATEGORY_ADD   = "START_CATEGORY_ADD ";
export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
export const ADD_CATEGORY_ERR = "ADD_CATEGORY_ERR";

const addProject = (newProj) => dispatch => {
    
    dispatch({type: START_CATEGORY_ADD})

    axiosWithAuth()
    .post(`${configs.API_ENDPOINT}/categories`, newProj)
    .then(res => {
        dispatch({type: ADD_CATEGORY_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: ADD_CATEGORY_ERR, payload: err.message})
    })
}

export default addProject