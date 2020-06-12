import { createAction } from "../Action/createAction";
import { CART, STATE, DETAIL } from "../Action/Type";

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
                return dispatch(createAction(STATE, JSON.parse(stateStr)));
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
    // getTotal = () => {
    //     return dispatch => {
    //         const total = localStorage.getItem('total');
    //         if(total){
    //             return
    //         }
    //     }
    // }
}
export const local = new Local();