import * as ActionType from "../ActionType"

const initialState = {
    isLoding: false,
    form: [],
    errore: null
}
export const signFormReducer = (state = initialState, action) => {
    console.log(action.payload);
    console.log(state);
    switch (action.type) {
        case ActionType.GET_FORM_DATA:
            return {
                ...state,
                form: action.payload
            }

        case ActionType.POST_FORM_DATA:
            return {
                ...state,
                form : state.form.concat(action.payload)
            }
        default:
            return state
    }
}