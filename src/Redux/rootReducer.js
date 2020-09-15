import { combineReducers } from 'redux';
import { CourseReducer } from './Reducers/CouseReducer';
import { CartReducer } from './Reducers/CartReducer.js';
import { UserReducer } from './Reducers/UserReducer.js';
export const rootReducer = combineReducers({
    CourseReducer, CartReducer, UserReducer
})