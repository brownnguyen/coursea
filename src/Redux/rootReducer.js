import { combineReducers } from 'redux';
import { CourseReducer } from './CouseReducer.js';
import { CartReducer } from './CartReducer.js';
import { UserReducer } from './UserReducer.js';
export const rootReducer = combineReducers({
    CourseReducer, CartReducer, UserReducer
})