import React, { Component } from 'react'
import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignUp.scss';
import { connect } from 'react-redux';
import { signUp } from '../../Action/User';
const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string().required('Username is required!'),
    matKhau: Yup.string().required('Password is required!'),
    hoTen: Yup.string().required("Full name is required!"),
    soDT: Yup.number().required('Invalid phone number!'),
    email: Yup.string().email('Invalid email').required('Email is required')
})
class SignUp extends Component {
    render() {
        return (
            <Formik initialValues={{
                taiKhoan: '',
                matKhau: '',
                hoTen: '',
                soDT: '',
                email: '',
                maNhom: "GP01"
            }}
                onSubmit={(values) => {
                    this.props.dispatch(signUp(values));
                }}
                validationSchema={SignupSchema}
            >{({ handleChange }) => (
                <Form className="container signUpForm">
                    <h4 className="text-center">SignUp</h4>
                    <div className="row signUpForm__content mx-auto">
                        <div className="row">
                            <div className="form-group col-12">
                                <Field type="text" onChange={handleChange} name="taiKhoan" className="form-control" placeholder="Username" />
                                <ErrorMessage name="taiKhoan">{msg => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group col-12">
                                <Field type="password" onChange={handleChange} name="matKhau" className="form-control" placeholder="Password" autoComplete="on" />
                                <ErrorMessage name="matKhau">{msg => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group col-12">
                                <Field type="text" onChange={handleChange} name="hoTen" className="form-control" placeholder="Full name" />
                                <ErrorMessage name="hoTen">{msg => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group col-12">
                                <Field type="text" onChange={handleChange} name="soDT" className="form-control" placeholder="Phone Number" />
                                <ErrorMessage name="soDT">{msg => <div style={{ color: "red", fontSize: "12px" }}>{"Invalid phone number"}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group col-12">
                                <Field type="text" onChange={handleChange} name="email" className="form-control" placeholder="Email" />
                                <ErrorMessage name="email">{msg => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group col-12 signUp__Button">
                                <button type="submit" className="form-control">SignUp</button>
                            </div>
                        </div>
                    </div>
                </Form>
            )
                }
            </Formik >
        )
    }

}
export default connect()(SignUp);
