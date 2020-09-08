import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { constHeader } from '../../constants/Constants';
import './Headers.scss';
import { connect } from 'react-redux';
import { createAction } from '../../Action/createAction';
import { KIND } from '../../Action/Type';
class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            stickHeader: false
        }
    }
    navigatePage = (item) => {
        this.setState({
            show: false
        })
        if (item == "course") {
            this.props.dispatch(createAction(KIND, "all"))
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
                <li key={index}>
                    <NavLink key={index} to={`/${item}`}
                        exact
                        onClick={() => this.navigatePage(item)}
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
                        <NavLink to="/home" exact>COUR<span className="brand">SEA</span></NavLink>
                    </h1>
                </div>
                <NavLink to="/shoppingCart" className="shop__cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span className="cart_item">{this.props.cart.length}</span>
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
const mapStateToProps = (state) => ({
    cart: state.CartReducer.cart
})
export default connect(mapStateToProps, null)(Headers);