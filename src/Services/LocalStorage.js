import { createAction } from "../Redux/Action/createAction";
import { CART, STATE, DETAIL, USER__LOGIN } from "../Redux/Action/Type";

class Local {
    getCart = () => {
        return dispatch => {
            const cartStr = localStorage.getItem('cart');
            if (cartStr) {
                return (
                    dispatch(createAction(CART, JSON.parse(cartStr)))
                )
            }
        }

    }
    getState = () => {
        return dispatch => {
            const stateStr = localStorage.getItem('state');
            if (stateStr) {
                return dispatch(createAction(STATE, JSON.parse(stateStr))
                );
            }
        }
    }
    getCourseDetail = () => {
        return dispatch => {
            const detailStr = localStorage.getItem('detail');
            if (detailStr) {
                return dispatch(createAction(DETAIL, JSON.parse(detailStr))
                );
            }
        }
    }
    getUserLogin = () => {
        return dispatch => {
            const userStr = localStorage.getItem('user');
<<<<<<< HEAD
=======
            console.log(userStr)
>>>>>>> d80654b755c50444a0ca64d32473d12e5a3281bb
            if (userStr) {
                return dispatch(createAction(USER__LOGIN, JSON.parse(userStr)))
            }
        }
    }
}
export const local = new Local();