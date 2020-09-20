import { HIDE_LOADING, SHOW_LOADING } from "../Action/Type";

const initialState = {
    showLoading: false
}
export const UiReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case SHOW_LOADING: {
            state.showLoading = payload;
            return state;
        }
        case HIDE_LOADING: {
            state.showLoading = payload;
            return state;
        }
        default:
            return state;
    }
}