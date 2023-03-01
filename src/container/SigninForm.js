import React, { useEffect } from 'react';
import * as yup from 'yup'
import { Formik, useFormik, Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { getFormData, postFormData } from '../redux/action/signinform.action';

function SigninForm(props) {

    const dispatch = useDispatch()
    const formFinData = useSelector(state => state.formData)
    console.log(formFinData.form);

    useEffect(() => {
        dispatch(getFormData())
    }, [])

    const handleFormData = (values) => {
        // alert("handelFormData")

        dispatch(postFormData(values))
    }
    // schema 
    let schema = yup.object().shape({
        name: yup.string().required("name is required"),
        email: yup.string().required("email is required")
    })

    // formik object
    const formObj = useFormik({
        initialValues: {
            name: "",
            email: ""
        },

        validationSchema: schema,

        onSubmit: values => {
            console.log(values);

            handleFormData(values)
            // alert("ok")
        }
    })

    const { handleChange, handleSubmit } = formObj;

    return (
        <div>
            <Formik values={formObj}>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder='name'
                            name="name"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder='email'
                            name="email"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <button type="submit">Subscribe</button>
                    </div>
                </Form>
            </Formik>

            <div>
                <table border={"1"}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            formFinData.form.map((d, i) => {
                                return (

                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{d.name}</td>
                                        <td>{d.email}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SigninForm;