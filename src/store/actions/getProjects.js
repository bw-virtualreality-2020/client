import { axiosWithAuth } from '../../components/utils/axiosWithAuth';
import { configs } from '../../config';

export const START_PROJECT_GET   = "START_PROJECT_GET ";
export const GET_PROJECT_SUCCESS = "GET_PROJECT_SUCCESS";
export const GET_PROJECT_ERR = "GET_PROJECT_ERR";

const getProjects = () => dispatch => {
    
    dispatch({type: START_PROJECT_GET})

    axiosWithAuth()
    .get(`${configs.API_ENDPOINT}/projects`)
    .then(({data}) => {
        dispatch({type: GET_PROJECT_SUCCESS, payload: data.projects})
    }) 
    .catch(err => {
        dispatch({type: GET_PROJECT_ERR, payload: err.message})
    })
}

export default getProjects