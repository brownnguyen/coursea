import { userServices } from "../../Services"
import { USER__LOGIN } from "../Action/Type"
import { createAction } from '../Action/createAction';
export const login = (user, props) => {
    return dispatch => {
        userServices.Login(user).then(res => {
            dispatch(createAction(USER__LOGIN, res.data));
            console.log(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))
            alert("Success");
            props.history.replace('/home')
        }).catch(err => {
            alert("Username or password incorrect!")
        })
    }
}
export const signUp = (user, props) => {
    return dispatch => {
        userServices.SignUp(user).then(res => {
            dispatch(createAction(USER__LOGIN, JSON.stringify(res.data)));
            console.log(res.data)
            localStorage.setItem('user', res.data)
            alert(" Success");
            props.history.replace('/')
        }).catch(err => {
            alert("UserName is already in used!");
        })
    }
}