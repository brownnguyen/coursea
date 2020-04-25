import React, { Component } from 'react';
import './Footer.scss';
export default class Footer extends Component {
    render() {
        return (
            <div className="container-fuild footer">
                <div className="row footer__content">
                    <div className="logo">
                        <a href="https://github.com/brownnguyen/coursea">Cour<span>sea</span></a>
                    </div>
                    <div className="about">
                        <p>© 2020 Copyright NNN coporation </p>
                    </div>
                    <div className="connect">
                        <a href="https://github.com/brownnguyen/coursea">
                        <i className="fab fa-gitlab git__icon"></i>
                        </a>
                        <a href="https://www.facebook.com/nguyenduchung2608">
                            <i className="fab fa-facebook-f face__icon"></i>
                        </a>
                        <a href="https://twitter.com/?lang=vi">
                            <i className="fab fa-twitter twitter__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
