import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Login from '../Login/Login.js';
import SignUp from '../SignUp/SignUp';
import './Headers.scss'
export default class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    showDrawer = () => {
        if (this.state.show) {
            this.setState({
                show: false
            })
        }
        else {
            this.setState({
                show: true
            })
        }
    }
    render() {
        return (
            <header className="header">
                <div className="logo">
                    <h1>
                        <NavLink to="/" exact>Cour<span className="brand">sea</span></NavLink>
                    </h1>
                </div>
                <NavLink to="/shoppingCart" className="shop__cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </NavLink>
                <div className={this.state.show ? "drawer expand" : "drawer"}>
                    <ul>
                        <li>
                            <NavLink to='/'
                                exact
                                activeClassName="activeClass">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'
                                exact
                                activeClassName="activeClass">
                                Course
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'
                                exact
                                activeClassName="activeClass">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'
                                exact
                                activeClassName="activeClass">
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'
                                exact
                                activeClassName="activeClass"
                                onClick={this.renderSignUp}
                            >
                                SignUp
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="menu-burger" onClick={this.showDrawer}>
                    <div className={this.state.show ? "menu active" : "menu"}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
        )
    }
}
