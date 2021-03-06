import { ADD_CART, CART, REMOVE__COURSE, COURSE__DETAIL, DETAIL } from "../Action/Type"

const initialState = {
    cart: [],
    courseDetail: {}
}
export const CartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART:
            {
                return {...state, cart: payload}
            }
        case ADD_CART:
            {
                let item = (state.cart.find(sp => sp.id === payload.id))
                if (item) {
                    return { ...state };
                }
                else {
                    state.cart = [...state.cart, payload];
                    localStorage.setItem('cart', JSON.stringify(state.cart))
                    return { ...state }
                }
            }
        case REMOVE__COURSE:
            {
                let index = state.cart.findIndex(item => item.id === payload);
                let removeCart = [...state.cart];
                if (index !== -1) {
                    removeCart.splice(index, 1);
                    state.cart = removeCart;
                }
                localStorage.setItem('cart', JSON.stringify(state.cart))
                return { ...state }
            }
        case COURSE__DETAIL:
            {
                state.courseDetail = payload;
                localStorage.setItem('detail', JSON.stringify(state.courseDetail))
                return { ...state }
            }
        case DETAIL:
            {
                return { ...state, courseDetail: payload }
            }
        default:
            return state;
    }
}
