import { FETCH_COURSEDETAIL, TOTAL_ITEM, KIND } from "../Action/Type";
const initialState = {
    course: [],
    totalItem : 0,
    kind: 'all'
}
export const CourseReducer = (state = initialState, action) => {
    let {payload} = action;
    switch (action.type) {
       
        case FETCH_COURSEDETAIL:
            {
                state.course = payload;
                return {...state}   
            }
        case TOTAL_ITEM:
            {
                state.totalItem = payload.length;
                return {...state}
            }
        case KIND:
            {
                state.kind = action.payload;
                if(state.kind === "all"){
                    state.totalItem = state.course.length;
                }
                else{
                    let length = state.course.filter(item => item.kind === payload).length;
                    state.totalItem = length;
                }
                return {...state}
            }
        default:
            return state;
    }
}