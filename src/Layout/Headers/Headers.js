import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Login from '../Login/Login.js';
import SignUp from '../SignUp/SignUp';
import { constHeader } from '../../constants/Constants';
import './Headers.scss'
export default class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            stickHeader: false
        }
    }
    scrollHeader = () => {
        const isTop = window.scrollY < 200;
        if (isTop) {
            this.setState({
                stickHeader: false
            })
        }
        else {
            this.setState({
                stickHeader: true
            })
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
    renderHeader = () => {
        return constHeader.map((item, index) => {
            return (
                <li>
                    <NavLink key={index} to={`/${item}`}
                        exact
                        activeClassName="activeClass">
                        {item.toUpperCase()}
                    </NavLink>
                </li>
            )
        })
    }
    componentDidMount() {
        window.onscroll = () => {
            this.scrollHeader()
        }
    }
    render() {
        return (
            <header className={this.state.stickHeader ? " header active" : "header"}>
                <div className="logo">
                    <h1>
                        <NavLink to="/" exact>COUR<span className="brand">SEA</span></NavLink>
                    </h1>
                </div>
                <NavLink to="/shoppingCart" className="shop__cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </NavLink>
                <div className={this.state.show ? "drawer expand" : "drawer"}>
                    <ul>
                        {this.renderHeader()}
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
