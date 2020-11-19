import { axiosWithAuth } from '../../components/utils/axiosWithAuth';
import { configs } from '../../config';

export const START_CATEGORY_ADD   = "START_CATEGORY_ADD ";
export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
export const ADD_CATEGORY_ERR = "ADD_CATEGORY_ERR";

const addCategory = (newCategory) => dispatch => {
    
    dispatch({type: START_CATEGORY_ADD})

    axiosWithAuth()
    .post(`${configs.API_ENDPOINT}/categories`, newCategory)
    .then({data} => {
        dispatch({type: ADD_CATEGORY_SUCCESS, payload: data})
    })
    .catch(err => {
        dispatch({type: ADD_CATEGORY_ERR, payload: err.message})
    })
}

export default addCategory