import { HIDE_ERROR, SHOW_ERROR, USER__LOGIN } from "../Action/Type";

const initialState = {
    user: null,
    showError: false
}
export const UserReducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case USER__LOGIN:
            {
                let user = { ...state.user };
                user = payload;
                state.user = user;
                return { ...state }
            }
        case SHOW_ERROR: {
            state.showError = payload;
            return { ...state }
        }
        case HIDE_ERROR: {
            state.showError = payload;
            return { ...state }
        }
        default:
            return state;
    }
}