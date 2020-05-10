import { userServices } from "../Services"
import { USER__LOGIN } from "./Type"
import { createAction } from './createAction.js';
export const login = (user) => {
    return dispatch => {
        userServices.Login(user).then(res => {
            dispatch(createAction(USER__LOGIN, res));
            alert("Success");
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}