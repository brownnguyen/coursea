import { FETCH_COURSEDETAIL, TOTAL_ITEM, KIND, ACTIVE_PAGE, STATE, TOTAL } from "../Action/Type";
import { local } from "../Services/LocalStorage";
const initialState = {
    course: [],
    totalItem: 0,
    kind: 'all',
    activePage: 1
}
export const CourseReducer = (state = initialState, action) => {
    let { payload } = action;
    switch (action.type) {
        case STATE:
            {
                state = payload;
                return { ...state }
            }
        case ACTIVE_PAGE:
            {
                state.activePage = payload;
                localStorage.setItem('state', JSON.stringify(state))
                return { ...state }
            }
        case FETCH_COURSEDETAIL:
            {
                state.course = payload;
                localStorage.setItem('state', JSON.stringify(state))
                return { ...state }
            }
        case TOTAL_ITEM:
            {
                state.totalItem = payload.length;
                localStorage.setItem('state', JSON.stringify(state))
                return { ...state }
            }
        case KIND:
            {
                let updateKind = { ...state.kind };
                updateKind = action.payload;
                state.activePage = 1;
                if (updateKind === "all") {
                    state.totalItem = state.course.length;
                }
                else {
                    let length = state.course.filter(item => item.kind === payload).length;
                    state.totalItem = length;
                }
                state.kind = updateKind;
                localStorage.setItem('state', JSON.stringify(state))
                return { ...state }
            }
        default:
            return state;
    }
}