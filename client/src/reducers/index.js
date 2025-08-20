import { combineReducers } from "redux"
import authReducers from './auth'
import currentUserReducer from './currentUser'
import usersReducer from './users'

export default combineReducers({
    authReducers,
    currentUserReducer,
    usersreducer: usersReducer
})