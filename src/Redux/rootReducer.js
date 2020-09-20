import { combineReducers } from 'redux';
import { CourseReducer } from './Reducers/CouseReducer';
import { CartReducer } from './Reducers/CartReducer.js';
import { UserReducer } from './Reducers/UserReducer.js';
import { UiReducer } from './Reducers/UiReducer.js';
export const rootReducer = combineReducers({
    CourseReducer, CartReducer, UserReducer, UiReducer
})