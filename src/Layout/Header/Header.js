import React, { Component } from 'react';
import './Header.scss';
import { NavLink, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createAction } from '../../Action/createAction';
import { KIND } from '../../Action/Type';
import Cart from '../Cart/Cart.js';
import Popup from 'reactjs-popup';
import Login from '../Login/Login.js';
import SignUp from '../SignUp/SignUp';
class Header extends Component {
    constructor(props) {
        super(props);
        this.handleMouse = this.handleMouse.bind(this);
        this.state = {
            scrolled: true,
            hover: false,
            setTime: null,
        }
    }
    renderLink = () => {
        return (
            <Route path="/course/all" exact children={(match) => {
                let courseList = ['all', "design", "development", "marketing", "software", "Personal", "Business", "Photography", "Music"];
                var curKind = match.location.pathname.split('/')[2];
                var active = courseList.includes(curKind) ? 'activeClass' : '';
                return <NavLink className={`${active} nav-link`} id="all" onClick={this.changeKind} exact to='/course/all'>Course</NavLink>
            }} />
        )
    }
    renderBottomCart = () => {
        return (
            <div className="shopCart__total">
                <div className="priceItemDiv">
                    <div className="price">
                        <h6>Total $</h6>
                        <p> ${this.props.cart.reduce((price, item) => {
                            return price += item.price
                        }, 0)}</p>
                    </div>
                    <div className="item">
                        <h6>Items </h6>
                        <p className="total__item">
                            {this.props.cart.length} in Cart
                        </p>
                    </div>
                </div>
                <div className="goToCartDiv">
                    <Link onClick={() => this.handleMouse(false)} className="btn btn-primary button__goToCart" to="/shoppingCart" >Go to Cart</Link>
                </div>
            </div>
        )
    }
    handleMouse = (bool) => {
        this.setState({
            hover: bool
        })
    }
    getAll = () => {
        return (
            this.props.kind
        )
    }
    changeKind = (e) => {
        let value = e.target.id
        this.props.dispatch(createAction(KIND, value));
    }
    renderSignIn = () => {
        return (
            <Popup className="mx-auto" style={{ width: "300px" }} modal trigger={
                <li className="nav-item">
                    <button className="nav-link">Login</button>
                </li>}>
                <Login />
            </Popup>
        )
    }
    renderSignUp = () => {
        return (
            <Popup className="mx-auto signUp__Form" modal trigger={
                <li className="nav-item">
                    <button className="nav-link">SignUp</button>
                </li>
            }>{close => (
                <>
                    <SignUp />
                    <p className="text-center">Already have account? <span onClick={() => this.renderSignIn()} className="SignInSignUp" style={{ cursor: "pointer" }}>Sign In</span></p>
                </>
            )}
            </Popup>
        )
    }
    render() {
        let { cart, user } = this.props;
        return (
            <div className={this.state.scrolled ? "container-fluid header sticky " : "container-fluid header"}>
                <nav className="navbar navbar-expand-lg  navbar-dark">
                    <NavLink to="/home" exact className="navbar-brand">Cour<span className="brand">sea</span></NavLink>
                    <div className="cartDiv" onClick={() => this.handleMouse(false)} onMouseEnter={() => this.handleMouse(true)}
                        onMouseLeave={() => this.handleMouse(false)}
                    >
                        <Link to="/shoppingCart" className="shop__cart">
                            <span><i className="fa fa-shopping-cart"></i></span>
                            {cart.length > 0 ? <span className="quantity">{cart.length}</span> : <span></span>}
                        </Link>
                        {
                            this.state.hover &&
                            <div className="cartContent">
                                <Cart />
                                {this.renderBottomCart()}
                            </div>
                        }
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" exact activeClassName="activeClass" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                {this.renderLink()}
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" exact activeClassName="activeClass" className="nav-link" >About</NavLink>
                            </li>
                            {user ? <li className="nav-item userInfo">Hello {user.hoTen} !</li> : (
                                <div className="userOption">
                                    {this.renderSignIn()}
                                    {this.renderSignUp()}
                                </div>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
    scroll = () => {
        const isTop = window.scrollY < 50;
        if (isTop) {
            this.setState({
                scrolled: false
            })
        }
        else {
            this.setState({
                scrolled: true
            })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => this.scroll())
    }

}

const mapStateToProps = (state) => ({
    kind: state.CourseReducer.kind,
    cart: state.CartReducer.cart,
    user: state.UserReducer.user
})
export default connect(mapStateToProps)(Header);