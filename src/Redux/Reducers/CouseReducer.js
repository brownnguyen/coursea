import { FETCH_COURSE, TOTAL_ITEM, KIND, ACTIVE_PAGE, STATE, COURSE_NAME } from "../Action/Type";
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
        case FETCH_COURSE:
            {
                state.course = payload;
                localStorage.setItem('state', JSON.stringify(state));
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
                    let length = state.course.filter(item => item.kind.toLowerCase() === payload).length;
                    state.totalItem = length;
                }
                state.kind = updateKind;
                localStorage.setItem('state', JSON.stringify(state))
                return { ...state }
            }
        default:
            return { ...state };
    }
}