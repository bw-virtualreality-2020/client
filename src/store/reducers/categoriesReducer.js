import { GET_CATEGORY_ERR, GET_CATEGORY_SUCCESS, START_CATEGORY_GET } from "../actions/getCategory"
import { ADD_CATEGORY_ERR, ADD_CATEGORY_SUCCESS, START_CATEGORY_ADD } from "../actions/addCategory"

const initialState = {
    loading: false,
    categories: [],
    editedCategories: [],
    error: ''
}

function categoriesReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case START_CATEGORY_GET:
            return { ...state, loading: true }
        case GET_CATEGORY_SUCCESS:
            return { ...state, loading: false, categories: payload }
        case GET_CATEGORY_ERR:
            return { ...state, loading: false, error: payload }
        case START_CATEGORY_ADD:
            return { ...state, loading: true }
        case ADD_CATEGORY_SUCCESS:
            return { ...state, loading: false, categories: payload.categories }
        case ADD_CATEGORY_ERR:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}

export default categoriesReducer