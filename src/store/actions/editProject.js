import { axiosWithAuth } from '../../components/utils/axiosWithAuth';
import { configs } from '../../config';

export const START_PROJECT_EDIT   = "START_PROJECT_EDIT ";
export const EDIT_PROJECT_SUCCESS = "EDIT_PROJECT_SUCCESS";
export const EDIT_PROJECT_ERR = "EDIT_PROJECT_ERR";

const editProject = (newProjInfo) => dispatch => {
    
    dispatch({type: START_PROJECT_EDIT})

    axiosWithAuth()
    .put(`${configs.API_ENDPOINT}/projects/${newProjInfo.id}`, newProjInfo)
    .then(({data}) => {
        dispatch({type: EDIT_PROJECT_SUCCESS, payload: data})
    }) 
    .catch(err => {
        dispatch({type: EDIT_PROJECT_ERR, payload: err.message})
    })
}

export default editProject