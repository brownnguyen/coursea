import React, { Component } from 'react';
import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createAction } from '../../Action/createAction';
import { KIND } from '../../Action/Type';
import { withRouter} from 'react-router';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: true
        }
    }
    changeKind = (e) => {
        let value = e.target.id
        this.props.dispatch(createAction(KIND, value));
    }
    render() {
        let {cart} = this.props;
        return (
            <div className={this.state.scrolled ? "container-fluid header sticky " : "container-fluid header"}>
                <nav className="navbar navbar-expand-lg  navbar-dark">
                    <NavLink to="/" exact className="navbar-brand">Cour<span className="brand">sea</span></NavLink>
                    <Link to="/shoppingCart" className="shop__cart">
                        <span><i className="fa fa-shopping-cart"></i></span>
                        {cart.length > 0 ? <span className="quantity">{cart.length}</span> : <span></span>}
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" exact activeClassName="activeClass" onClick={this.changeKind} className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/course/${this.props.kind}`} exact activeClassName="activeClass" id="all" onClick={this.changeKind} className="nav-link">Course</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" exact activeClassName="activeClass" className="nav-link" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.google.com">Login</a>
                            </li>
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
export default withRouter(connect(mapStateToProps)(Header));