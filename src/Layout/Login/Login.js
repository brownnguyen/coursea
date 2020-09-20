import React, { Component } from 'react'
import './Login.scss';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { login } from '../../Redux/Action/User';
import { NavLink } from 'react-router-dom';
import LoadingGlobal from '../LoadingGLobal/LoadingGlobal';
import ErrorNote from '../ErrorNote/ErrorNote';
const SignInSchema = Yup.object().shape({
    taiKhoan: Yup.string().required('Username is required'),
    matKhau: Yup.string().required('Password is required!')
})
class Login extends Component {
    state = {
        showLoading: true
    }
    renderShowError = () => {
        if (this.props.showError) {
            return <ErrorNote />
        }
    }
    renderMain = () => {
        let xhtml = null;
        if (this.state.showLoading) {
            xhtml = <LoadingGlobal />
        }
        else {
            xhtml = <div className="login-form">
                <Formik initialValues={{
                    taiKhoan: '',
                    matKhau: ''
                }}
                    onSubmit={(value) => {
                        this.props.dispatch(login(value, this.props))
                    }}
                    validationSchema={SignInSchema}
                >{({ handleChange }) => (
                    <Form className="row mx-auto login__form" style={{ width: "300px" }}>
                        <h4 className="login mx-auto">Login</h4>
                        <div className="form-group col-12">
                            <Field type="text" name="taiKhoan" className="form-control" onChange={handleChange} placeholder="username" />
                            <ErrorMessage name="taiKhoan">{msg => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-group col-12">
                            <Field type="password" name="matKhau" className="form-control" autoComplete="on" onChange={handleChange} placeholder="password" />
                            <ErrorMessage name="matKhau">{msg => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}</ErrorMessage>
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
        }
        return xhtml;
    }
    render() {
        return (
            <>
                { this.renderMain()}
                {this.renderShowError()}
            </>
        )
    }
    componentDidMount() {
        let timeOn = setTimeout(() => {
            this.setState({
                showLoading: false
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearTimeout(this.timeOn)
    }
}
const mapStateToProp = (state) => ({
    showError: state.UserReducer.showError
})
export default connect(mapStateToProp, null)(Login);