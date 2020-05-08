import { ADD_CART, CART, REMOVE__COURSE, COURSE__DETAIL, DETAIL } from "../Action/Type"

const initialState = {
    cart: [],
    courseDetail : {}
}
export const CartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART:
            {
                state.cart = payload;
                return { ...state }
            }
        case ADD_CART:
            {
                let item = (state.cart.find(sp => sp.id === payload.id))
                console.log(item)
                if (item) {
                    return { ...state };
                }
                else {
                    let cartUpdate = [...state.cart, payload];
                    state.cart = cartUpdate;
                    localStorage.setItem('cart', JSON.stringify(state.cart))
                    return { ...state }
                }
            }
        case REMOVE__COURSE:
            {
                let index = state.cart.findIndex(item => item.id === payload);
                let removeCart = [...state.cart];

                console.log(index, removeCart);
                if (index !== -1) {
                    removeCart.splice(index, 1);
                    state.cart = removeCart;
                }
                localStorage.setItem('cart', JSON.stringify(state.cart))
                return { ...state }
            }
            case COURSE__DETAIL:
                {
                    let detail = {...state.courseDetail};
                    detail = payload;
                    state.courseDetail = detail;
                    localStorage.setItem('detail', JSON.stringify(state.courseDetail))
                    return {...state}
                }
            case DETAIL:
                {
                    state.courseDetail = payload;
                    return {...state}
                }
        default:
            return { ...state }
    }
}
