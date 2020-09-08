import React, { Component } from 'react';
import Header from '../Layout/Header/Header.js';
import Home from '../Pages/Home.js';
import Footer from '../Layout/Footer/Footer.js';
import Course from '../Pages/Course.js'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { connect } from 'react-redux';
import About from '../Pages/About.js';
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart.js';
import CourseDetailPage from '../Pages/CourseDetailPage/CourseDetailPage.js';
import Login from '../Layout/Login/Login.js';
import SignUp from '../Layout/SignUp/SignUp.js';
import { local } from '../Services/LocalStorage.js';
import BackToTop from 'react-back-to-top-button';
import Headers from '../Layout/Headers/Headers.js';
import './App.scss';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Headers />
          <ScrollToTop>
            <Route path="/course/:courseId" exact component={Course} />
          </ScrollToTop>
          <Route path="/course" exact component={Course} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shoppingCart" exact component={ShoppingCart} />
          <Route path="/detailPage/:detailId" exact component={CourseDetailPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Redirect to="/home" />
          <BackToTop
            showAt={100}
            speed={3000}
            easing="easeInOutQuint"
          >
            <span style={{ color: "#ef2368", fontSize: "40px" }}><i className="fa fa-feather-alt"></i></span>
          </BackToTop>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(local.getState());
    this.props.dispatch(local.getCart());
    this.props.dispatch(local.getCourseDetail());
  }
}

export default connect()(App);

