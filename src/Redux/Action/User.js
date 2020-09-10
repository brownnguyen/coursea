import { userServices } from "../../Services"
import { USER__LOGIN } from "../Action/Type"
import { createAction } from '../Action/createAction';
export const login = (user) => {
    return dispatch => {
        userServices.Login(user).then(res => {
            dispatch(createAction(USER__LOGIN, res.data));
            alert("Success");
        }).catch(err => {
            alert("Username or password incorrect!")
        })
    }
}
export const signUp = (user) => {
    return dispatch => {
        userServices.SignUp(user).then(res=>{
            dispatch(createAction(USER__LOGIN, res.data));
            alert(" Success")
        }).catch(err=>{
            alert("UserName is already in used!");
        })
    }
}