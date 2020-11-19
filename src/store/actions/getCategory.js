import { axiosWithAuth } from '../../components/utils/axiosWithAuth';
import { configs } from '../../config';

export const START_CATEGORY_GET   = "START_CATEGORY_GET ";
export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS";
export const GET_CATEGORY_ERR = "GET_CATEGORY_ERR";

const getCategories = () => dispatch => {
    
    dispatch({type: START_CATEGORY_GET})

    axiosWithAuth()
    .get(`${configs.API_ENDPOINT}/categories`)
    .then(({data}) => {
        dispatch({type: GET_CATEGORY_SUCCESS, payload: data})
    })
    .catch(err => {
        dispatch({type: GET_CATEGORY_ERR, payload: err.message})
    })
}

export default getCategories