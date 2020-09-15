import { USER__LOGIN } from "../Action/Type";

const initialState = {
    user: null
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

        default:
            return state;
    }
}