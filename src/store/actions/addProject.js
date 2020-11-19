import { axiosWithAuth } from '../../components/utils/axiosWithAuth';
import { configs } from '../../config';

export const START_PROJECT_ADD   = "START_PROJECT_ADD ";
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
export const ADD_PROJECT_ERR = "ADD_PROJECT_ERR";

const addProject = (newProj) => dispatch => {
    
    dispatch({type: START_PROJECT_ADD})

    axiosWithAuth()
    .post(`${configs.API_ENDPOINT}/projects`, newProj)
    .then(({data}) => {
        dispatch({type: ADD_PROJECT_SUCCESS, payload: data})
    })
    .catch(err => {
        dispatch({type: ADD_PROJECT_ERR, payload: err.message})
    })
}

export default addProject