import * as ActionType from '../ActionType'
import { addForm, getForm } from "../../common/apis/form.api"


export const getFormData = () => (dispatch) => {
    console.log();
    try {

        // using fetch
        // fetch('http://localhost:3004/SigninForm')
        // .then((response) => response.json())
        // .then((data) => console.log(data))

        // using axios
        getForm()
            .then((response) => dispatch({ type: ActionType.GET_FORM_DATA, payload: response.data }))

        // .then((response) => console.log(response.data))
    } catch (errore) {

    }
}

export const postFormData = (data1) => (dispatch) => {
    try {
        addForm(data1)
        .then((response) => dispatch({type : ActionType.POST_FORM_DATA , payload : response.data}))

    // .then((response) => console.log(response.data))

    } catch (errore) {

    }
}