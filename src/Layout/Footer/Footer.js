import React, { Component } from 'react';
import './Footer.scss';
import logo from '../../img/img-logo-transparent.png';
export default class Footer extends Component {
    render() {
        return (
            <div className="container-fuild footer">
                <div className="row footer__content">
                    <div className="logo">
                        <a href="https://github.com/brownnguyen/coursea">
                            <img className="logo-footer" src={logo} alt="Coursea" />
                            {/* Cour<span>sea</span> */}
                        </a>
                    </div>
                    <div className="about">
                        <p>© 2020 Copyright NNN coporation </p>
                    </div>
                    <div className="connect">
                        <a href="https://github.com/brownnguyen/coursea">
                            <i className="fa fa-gitlab git__icon" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.facebook.com/nguyenduchung2608">
                            <i className="fa fa-facebook face__icon" aria-hidden="true"></i>
                        </a>
                        <a href="https://twitter.com/?lang=vi">
                            <i className="fa fa-twitter twitter__icon" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
