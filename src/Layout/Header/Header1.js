import React, { Component } from 'react';

class Header1 extends Component {
    renderUl = () => {
        let arrUl = ["Home", "Course", "About", "Login", "SignUp"];
        return arrUl.map((item, index) => {
            return (
                <li className="nav-item" key={index}>
                    <a href="#" className="nav-link">{item}</a>
                </li>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            {this.renderUl()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header1;