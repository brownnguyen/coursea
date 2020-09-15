import React, { Component } from 'react';
import './Footer.scss';
import logo from '../../img/img-logo-transparent.png';
import { footerContent } from '../../constants/Constants';
import { Link } from 'react-router-dom';
export default class Footer extends Component {
    renderFooterContent = () => {
        return footerContent.map((item, index) => {
            return (
                <div className="content" key={index + "x"}>
                    <h4 key={index} className="title-footer">
                        {item.title}
                    </h4>
                    <ul key={item.title} className="ul-list-footer">
                        {
                            item.content.map((link, index) => {
                                return (
                                    <li key={link.text}>
                                        <Link className="link-footer" to={`/${link.link}`}>{link.text}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="footer">
                <div className="footer-list">
                    {this.renderFooterContent()}
                </div>
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
