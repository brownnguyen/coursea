import { ADD_CART, CART } from "../Action/Type"

const initialState = {
    cart: []
}
export const CartReducer = (state = initialState, action) => {
   const {type, payload} = action;
    switch (type) {
        case CART:
            {
                state.cart = payload;
                return {...state}
            }
        case ADD_CART:
            {   
                let cartUpdate = [...state.cart,payload];
                state.cart = cartUpdate;
                localStorage.setItem('cart',JSON.stringify(state.cart))
                return {...state}
            }
        default:
            return { ...state }
    }
}
