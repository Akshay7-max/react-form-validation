import React from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Firstname is required'),
        lastName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Lastname is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters or more')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    })
    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }}
            validationSchema={validate}
            onSubmit={values => {
                alert(`First Name : ${values.firstName}, Last Name : ${values.lastName}, Email : ${values.email}, Password : ${values.password}, Confirm Password : ${values.confirmPassword}`);
                console.log(values);
            }}>
            {Formik => (
                <div>
                    <h1 className="my-4 text-center">Sign Up</h1>
                    <Form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="text" />
                        <button className="btn btn-outline-success btn-sm mt-3" type="submit">Submit</button>
                        &nbsp;
                        &nbsp;
                    <button className="btn btn-outline-danger btn-sm mt-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Signup
