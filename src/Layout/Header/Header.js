import React, { Component } from 'react';
import './Header.scss';
class Header extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="www.google.com">Cour<span className="brand">sea</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="www.google.com">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="www.google.com">Course</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="www.google.com">Teaching</a>
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
            </>
        );
    }
}

export default Header;