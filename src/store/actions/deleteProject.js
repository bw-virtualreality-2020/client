import { axiosWithAuth } from '../../components/utils/axiosWithAuth';
import { configs } from '../../config';

export const START_PROJECT_DELETE   = "START_PROJECT_DELETE ";
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";
export const DELETE_PROJECT_ERR = "DELETE_PROJECT_ERR";

const deleteProject = (target) => dispatch => {
    
    dispatch({type: START_PROJECT_DELETE})

    axiosWithAuth()
    .delete(`${configs.API_ENDPOINT}/projects/${target}`)
    .then(res => {
        dispatch({type: DELETE_PROJECT_SUCCESS, payload: res.data})
    }) 
    .catch(err => {
        dispatch({type: DELETE_PROJECT_ERR, payload: err.message})
    })
}

export default deleteProject