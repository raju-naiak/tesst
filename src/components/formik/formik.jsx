import { Field, useFormik } from "formik";
import * as Yup from 'yup';
import React from "react";

const validate = values =>{
    const errors = {};

    if(!values.firstName){
        errors.firstName = 'Required';
    }else if (values.firstName.length > 15){
        errors.firstName = "must be 15 characters or less"
    }

    if(!values.lastName){
        errors.lastName = 'Required';
    }else if (values.lastName.length > 20){
        errors.lastName = "must be 20 characters or less"
    }
    
    if(!values.email){
        errors.email = 'Required';
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
    }

    if(!values.password){
        errors.password = 'Required';
    }else if(values.password.legnth < 8){
        errors.password = 'Password must be at least 8 characters';
    }else if(!/[A-Z]/.test(values.password)){
        errors.password = 'Password must contain at least one uppercase letter';
    }else if(!/[a-z]/.test(values.password)){
        errors.password = 'Password must contain at least one lowercase letter'
    }else if(!/[0-9]/.test(values.password)){
        errors.password = 'Password must contain at leastone number';
    }else if(!/[!@#$%^&*]/.test(values.password)){
        errors.password = 'Password must contain at least one special character (!@#$%^&*)'
    }

    return errors;
};


export function FormikForm() {

    const Formik = useFormik({
        initialValues: {
            firstName:'',
            lastName:'',
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            // console.log(values);
            alert(JSON.stringify(values, null, 2))
        },

    });
    return (
        <div>
            <h3>Registraion </h3>
            <div>
                <div>
                    <form onSubmit={Formik.handleSubmit}>
                        <div>
                            <label htmlFor="first Name">First Name:</label>
                            <input 
                            id="firstName"
                            type="text"
                            name="firstName" 
                            value={Formik.values.firstName} 
                            onBlur={Formik.handleBlur}
                            onChange={Formik.handleChange}
                            placeholder="Enter firstName">
                            </input>
                        </div>
                        {Formik.errors.firstName ? <div>{Formik.errors.firstName}</div> : null}
                        <div>
                            <label htmlFor="last Name">Last Name:</label>
                            <input 
                            id="lastName"
                            name="lastName"
                            value={Formik.values.lastName}
                            onChange={Formik.handleChange}
                            placeholder="Enter last Name"
                            >
                            </input>
                        </div>
                         {Formik.errors.lastName ? <div>{Formik.errors.lastName}</div> : null}
                      
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input 
                            id="email" 
                            name="email" 
                            value={Formik.values.email} 
                            onBlur={Formik.handleBlur}
                            onChange={Formik.handleChange}
                            placeholder="Enter Email Id"
                            >
                            </input>
                        </div>
                        {Formik.errors.email ? <div>{Formik.errors.email}</div> : null}
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input 
                            id="password"
                            name="password" 
                            value={Formik.values.password}
                            onBlur={Formik.handleBlur} 
                            onChange={Formik.handleChange}
                            placeholder="Enter Password">
                            </input>
                        </div>
                        {Formik.errors.password ? <div>{Formik.errors.password}</div> : null}
                        {/* <Field></Field> */}
                    </form>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormikForm;