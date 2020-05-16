import React, { Component } from 'react'
import './Login.scss';
import { Form , Formik, Field} from 'formik';
import {connect} from 'react-redux';
import {login} from '../../Action/User.js';
class Login extends Component {
    render() {
        return (
            <Formik initialValues={{
                taiKhoan: '',
                matKhau: ''
            }}
            onSubmit={(value)=>{
                this.props.dispatch(login(value))
            }} >{({handleChange}) => (
                <Form className="row mx-auto login__form" style={{width: "300px"}}>
                <h4 className="login mx-auto">Login</h4>
                <div className="form-group col-12">
                    <label>Username</label>
                    <Field type="text" name="taiKhoan" className="form-control" onChange={handleChange} placeholder="username"/>
                </div>
                <div className="form-group col-12">
                    <label>Password</label>
                    <Field type="password" name="matKhau" className="form-control" onChange={handleChange} placeholder="password"/>
                </div>
                <div className="form-group col-12">
                    <button type="submit" className="form-control btn login__button">Login</button>
                </div>
            </Form>
            )}
            </Formik>
        )
    }
}
export default connect()(Login);