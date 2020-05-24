import React, { Component } from 'react';
import './Header.scss';
import { NavLink, Route } from 'react-router-dom';
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
            isShowCollapseMenu: false
        }
    }
    showCollapse = (bool) => {
        this.setState({
            isShowCollapseMenu: bool
        }, console.log(this.state.isShowCollapseMenu))
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
            <Popup className="mx-auto modalLogin" modal trigger={
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
                    <NavLink to="/" exact className="navbar-brand">Cour<span className="brand">sea</span></NavLink>
                    <div className="cartDiv" onClick={() => this.handleMouse(false)} onMouseEnter={() => this.handleMouse(true)}
                        onMouseLeave={() => this.handleMouse(false)}
                    >
                        <NavLink to="/shoppingCart" className="shop__cart">
                            <span><i className="fa fa-shopping-cart"></i></span>
                            {cart.length > 0 ? <span className="quantity">{cart.length}</span> : <span></span>}
                        </NavLink>
                        {
                            this.state.hover &&
                            <div className="cartContent">
                                <Cart />
                            </div>
                        }
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse" id="navbarNav" onClick={() => this.showCollapse(true)}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" exact activeClassName="activeClass" onClick={() => this.showCollapse(false)} className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                {this.renderLink()}
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" exact activeClassName="activeClass" className="nav-link" onClick={() => this.showCollapse(false)} >About</NavLink>
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
        window.addEventListener('scroll', () => this.scroll());
        document.querySelectorAll(".nav-link").forEach(item => {
            item.addEventListener("click", () => {
                document.querySelector(".navbar-collapse").classList.remove("show");
            })
        })
    }

}

const mapStateToProps = (state) => ({
    kind: state.CourseReducer.kind,
    cart: state.CartReducer.cart,
    user: state.UserReducer.user
})
export default connect(mapStateToProps)(Header);