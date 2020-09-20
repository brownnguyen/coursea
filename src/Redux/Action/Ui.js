import { createAction } from "./createAction"
import { HIDE_LOADING, SHOW_LOADING } from "./Type"

export const showLoading = () => {
    return dispatch => {
        dispatch(createAction(SHOW_LOADING, true))
    }
}

export const hideLoading = () => {
    return dispatch => {
        dispatch(createAction(HIDE_LOADING, false))
    }
}