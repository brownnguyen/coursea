import React, { Component } from 'react';
import Home from '../Pages/Home.js';
import Course from '../Pages/Course.js'
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { connect } from 'react-redux';
import About from '../Pages/About.js';
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart.js';
import CourseDetailPage from '../Pages/CourseDetailPage/CourseDetailPage.js';
import Login from '../Layout/Login/Login.js';
import SignUp from '../Layout/SignUp/SignUp.js';
import { local } from '../Services/LocalStorage.js';
import BackToTop from 'react-back-to-top-button';
import './App.scss';
import HomeTemplate from '../Templates/HomeTemplate/HomeTemplate.js';
import UserTemplate from '../Templates/UserTemplate/UserTemplate.js';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ScrollToTop>
            <HomeTemplate
              path="/course/:courseId"
              exact
              component={Course} />
          </ScrollToTop>
          <HomeTemplate
            path="/course"
            exact
            component={Course} />
          <HomeTemplate path="/home" exact component={Home} />
          <HomeTemplate path="/about" exact component={About} />
          <HomeTemplate path="/shoppingCart" exact component={ShoppingCart} />
          <HomeTemplate path="/detailPage/:detailId" exact component={CourseDetailPage} />
          <HomeTemplate path="/" exact component={Home} />
          <UserTemplate path="/login" exact component={Login} />
          <UserTemplate path="/signup" exact component={SignUp} />
          <BackToTop
            showAt={100}
            speed={3000}
            easing="easeInOutQuint"
          >
            <span style={{ color: "#ef2368", fontSize: "40px" }}><i className="fa fa-feather-alt"></i></span>
          </BackToTop>

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

