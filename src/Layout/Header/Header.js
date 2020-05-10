import React, { Component } from 'react';
import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createAction } from '../../Action/createAction';
import { KIND } from '../../Action/Type';
import Cart from '../Cart/Cart.js';
import Popup from 'reactjs-popup';
import Login from '../Login/Login.js';
class Header extends Component {
    constructor(props) {
        super(props);
        this.handleMouse = this.handleMouse.bind(this);
        this.state = {
            scrolled: true,
            kind: "all",
            hover: false,
            setTime: null
        }
    }
    handleMouse = () => {
        this.setState({
            hover: !this.state.hover
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
    render() {
        let { cart } = this.props;
        return (
            <div className={this.state.scrolled ? "container-fluid header sticky " : "container-fluid header"}>
                <nav className="navbar navbar-expand-lg  navbar-dark">
                    <NavLink to="/" exact className="navbar-brand">Cour<span className="brand">sea</span></NavLink>
                    <div className="cartDiv" onMouseEnter={()=>this.handleMouse()}
                        onMouseLeave={()=>this.handleMouse()}
                    >
                        <Link type="button" to="/shoppingCart" className="shop__cart">
                            <span><i className="fa fa-shopping-cart"></i></span>
                            {cart.length > 0 ? <span className="quantity">{cart.length}</span> : <span></span>}
                        </Link>
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
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" exact activeClassName="activeClass" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/course/all" exact activeClassName="activeClass" id="all" onClick={this.changeKind} className="nav-link">Course</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" exact activeClassName="activeClass" className="nav-link" >About</NavLink>
                            </li>
                            <Popup className="mx-auto" style={{width:"300px"}} modal trigger={
                                <li className="nav-item">
                                <button className="nav-link">Login</button>
                            </li>}>
                                <Login/>
                            </Popup>
                            <li className="nav-item">
                                <a className="nav-link" href="www.google.com">SignUp</a>
                            </li>
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
    cart: state.CartReducer.cart
})
export default connect(mapStateToProps)(Header);