import { getRequest, postRequest } from "../request"


export const getForm = () => {
    return getRequest("SigninForm")
}

export const addForm = (data) => {
    return postRequest("SigninForm" , data)
}