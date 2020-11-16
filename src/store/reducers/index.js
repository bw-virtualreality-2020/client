//redux imports
import { combineReducers } from 'redux'

//reducers
import userAuthReducer from './userAuthReducer'

//root reducer
const rootReducer = combineReducers({
    userAuthReducer,
})

//export reducer
export default rootReducer