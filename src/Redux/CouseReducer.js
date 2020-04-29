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
                let updateKind = {...state.kind};
                updateKind = action.payload;
                if(updateKind === "all"){
                    state.totalItem = state.course.length;
                }
                else{
                    let length = state.course.filter(item => item.kind === payload).length;
                    state.totalItem = length;
                }
                state.kind = updateKind;
                return {...state}
            }
        default:
            return state;
    }
}