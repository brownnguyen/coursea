import React, { Component } from 'react';
import './Footer.scss';
import logo from '../../img/img-logo-transparent.png';
import { footerContent } from '../../constants/Constants';
import { Link } from 'react-router-dom';
export default class Footer extends Component {
    state = {
        expand: false
    }
    renderFooterContent = () => {
        return footerContent.map((item, index) => {
            return (
                <div
                    className="content"
                    key={index + "x"}>
                    <h4 key={index} className="title-footer">
                        {item.title}
                    </h4>
                    <ul key={item.title} className="ul-list-footer">
                        {
                            item.content.map((link) => {
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
    showListFooter = () => {
        this.setState({
            expand: !this.state.expand
        })
    }
    componentDidMount() {
        let contentFooter = document.querySelectorAll('.footer-list .content');
        let contentUl = document.querySelectorAll('.content .ul-list-footer');
        const renderFooterContent = () => {
            contentFooter.forEach((item, index) => {
                item.onclick = () => {
                    if (!item.classList.contains('expand')) {
                        item.classList.add('expand')
                        let height = 0;
                        for (let i = 0; i < contentUl[index].children.length; i++) {
                            height += contentUl[index].children[i].offsetHeight;
                        }
                        contentUl[index].style.height = height + "px";
                    }
                    else {
                        item.classList.remove('expand')
                        contentUl[index].style.height = 0;
                    }

                }
            })
        }
        renderFooterContent()
    }
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer-list">
                        {this.renderFooterContent()}
                    </div>
                </div>
                <div className="row footer__content">
                    <div className="logo">
                        <Link to="/">
                            <img className="logo-footer" src={logo} alt="Coursea" />
                            {/* Cour<span>sea</span> */}
                        </Link>
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
