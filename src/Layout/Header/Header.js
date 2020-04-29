import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
class Header extends Component {
    render() {
        return (
            <div className="container-fluid header">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <NavLink to="/" exact className="navbar-brand" href="#">Cour<span className="brand">sea</span></NavLink>
                    <div className="shop__cart">
                        <span><i className="fa fa-shopping-cart"></i></span>
                        <span></span>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink to="/" exact activeClassName="activeClass" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/course/${this.props.kind}`} exact activeClassName="activeClass" className="nav-link">Course</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.google.com">About</a>
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
}

const mapStateToProps = (state) => ({
    kind : state.CourseReducer.kind
})
export default connect(mapStateToProps)(Header);