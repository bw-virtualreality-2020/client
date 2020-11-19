//redux imports
import { combineReducers } from 'redux'

//reducers
import categoriesReducer from './categoriesReducer'
import projectsReducer from './projectsReducer'
import userAuthReducer from './userAuthReducer'

//root reducer
const rootReducer = combineReducers({
    categoriesReducer,
    userAuthReducer,
    projectsReducer
})

//export reducer 
export default rootReducer