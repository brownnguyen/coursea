import { userServices } from "../../Services"
import { HIDE_ERROR, SHOW_ERROR, USER__LOGIN } from "../Action/Type"
import { createAction } from '../Action/createAction';
export const login = (user, props) => {
    return dispatch => {
        userServices.Login(user).then(res => {
            dispatch(createAction(USER__LOGIN, res.data));
            localStorage.setItem('user', JSON.stringify(res.data))
            alert("Success");
            props.history.replace('/')
        }).catch(err => {
            dispatch(createAction(SHOW_ERROR, true))
            setTimeout(() => {
                dispatch(createAction(HIDE_ERROR, false))
            }, 3000)
        })
    }
}
export const signUp = (user, props) => {
    return dispatch => {
        userServices.SignUp(user).then(res => {
            dispatch(createAction(USER__LOGIN, JSON.stringify(res.data)));
            localStorage.setItem('user', res.data)
            alert(" Success");
            props.history.replace('/')
        }).catch(err => {
            dispatch(createAction(SHOW_ERROR, true))
            setTimeout(() => {
                dispatch(createAction(HIDE_ERROR, false))
            }, 3000)
        })
    }
}