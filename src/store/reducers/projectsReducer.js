const { ADD_PROJECT_SUCCESS, ADD_PROJECT_ERR, START_PROJECT_ADD } = require("../actions/addProject");
const { DELETE_PROJECT_SUCCESS, START_PROJECT_DELETE, DELETE_PROJECT_ERR } = require("../actions/deleteProject");
const { EDIT_PROJECT_SUCCESS, START_PROJECT_EDIT, EDIT_PROJECT_ERR } = require("../actions/editProject");
const {  GET_PROJECT_SUCCESS, GET_PROJECT_ERR, START_PROJECT_GET } = require("../actions/getProjects");

const initialState = {
    loading: false,
    projects: [],
    editedProjects: [],
    error: ''
}

function projectsReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case START_PROJECT_GET:
            return { ...state, loading: true }
        case GET_PROJECT_SUCCESS:
            return { ...state, loading: false, projects: payload }
        case GET_PROJECT_ERR:
            return { ...state, loading: false, error: payload }
        case START_PROJECT_ADD:
            return { ...state, loading: true }
        case ADD_PROJECT_SUCCESS:
            return { ...state, loading: false, projects: payload.projects }
        case ADD_PROJECT_ERR:
            return { ...state, loading: false, error: payload }
        case START_PROJECT_EDIT:
            return { ...state, loading: true }
        case EDIT_PROJECT_SUCCESS:
            return { ...state, loading: false, projects: [...state.projects].map(proj => proj.id === payload.id ? payload : proj) }
        case EDIT_PROJECT_ERR:
            return { ...state, loading: false, error: payload }
        case START_PROJECT_DELETE:
            return { ...state, loading: true }
        case DELETE_PROJECT_SUCCESS:
            return { ...state, loading: false, projects: payload }
        case DELETE_PROJECT_ERR:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}

export default projectsReducer