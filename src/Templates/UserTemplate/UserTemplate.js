import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import './UserTemplate.scss';
import Footer from '../../Layout/Footer/Footer';
import logo from "../../img/img-logo-transparent.png";
const UserLayout = (props) => {
    return (
        <>
            <div className="userlayout">
                <div className="block-user">
                    <div className="content">
                        <NavLink className="title" to="/" exact>
                            <img className="logo-user" src={logo} alt="coursea" />
                            <h4 className="title">
                                <span>Southeast Asia's</span>leading e-learning platform
                                </h4>
                        </NavLink>
                    </div>
                </div>
                <div className="block-user">
                    {props.children}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default function UserTemplate(props) {
    return (
        <Route
            path={props.path}
            exact={props.exact}
            render={(propsComponent) => (
                <UserLayout>
                    <props.component {...propsComponent}></props.component>
                </UserLayout>
            )} />
    )
}
