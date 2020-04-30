import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createAction } from '../../Action/createAction';
import { KIND } from '../../Action/Type';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: true,
            kindAll : "all"
        }
    }
    changeKind = (e) => {
        let value = e.target.id
        this.props.dispatch(createAction(KIND, value))
    }
    render() {
        return (
            <div className={this.state.scrolled ? "container-fluid header sticky " : "container-fluid header"}>
                <nav className="navbar navbar-expand-md navbar-dark">
                    <NavLink to="/" exact className="navbar-brand" onClick={this.changeKind} href="#">Cour<span className="brand">sea</span></NavLink>
                    <div className="shop__cart">
                        <span><i className="fa fa-shopping-cart"></i></span>
                        <span></span>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" exact activeClassName="activeClass" onClick={this.changeKind} className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/course/all" exact activeClassName="activeClass" id="all" onClick={this.changeKind}  className="nav-link">Course</NavLink>
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
        const isTop = window.scrollY < 100;
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
    componentWillMount() {
        window.removeEventListener('scroll', () => this.scroll());
    }
}

const mapStateToProps = (state) => ({
    kind: state.CourseReducer.kind
})
export default connect(mapStateToProps)(Header);