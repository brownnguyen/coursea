import React, { Component } from 'react'
import './Login.scss';
import { Form, Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { login } from '../../Action/User.js';
import { NavLink } from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <div className="login-form">
                <Formik initialValues={{
                    taiKhoan: '',
                    matKhau: ''
                }}
                    onSubmit={(value) => {
                        this.props.dispatch(login(value))
                    }} >{({ handleChange }) => (
                        <Form className="row mx-auto login__form" style={{ width: "300px" }}>
                            <h4 className="login mx-auto">Login</h4>
                            <div className="form-group col-12">
                                <Field type="text" name="taiKhoan" className="form-control" onChange={handleChange} placeholder="username" />
                            </div>
                            <div className="form-group col-12">
                                <Field type="password" name="matKhau" className="form-control" autoComplete="on" onChange={handleChange} placeholder="password" />
                            </div>
                            <div className="form-group col-12">
                                <button type="submit" className="form-control btn login__button">Login</button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="moveSignUp">
                    <span>Don't have an account?</span>
                    <NavLink className="btn-sign" to="/signup">
                        Sign Up
                    </NavLink>
                </div>
            </div>
        )
    }
}
export default connect()(Login);