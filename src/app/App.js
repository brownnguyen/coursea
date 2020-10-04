import React, { Component } from 'react';
import Home from '../Pages/Home.js';
import Course from '../Pages/Course.js'
import { BrowserRouter, Switch } from 'react-router-dom';
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
import Page404 from '../Layout/Page404/Page404.js';
import PayPage from '../Pages/PayPage/PayPage.js';
import firebase from 'firebase';
import { firebaseConfig } from '../firebaseConfig.js';
import { FETCH_COURSE } from '../Redux/Action/Type.js';
import { createAction } from '../Redux/Action/createAction.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database().ref();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <HomeTemplate path="/course/:courseId" exact component={Course} />
              <HomeTemplate path="/course" exact component={Course} />
              <HomeTemplate path="/about" exact component={About} />
              <HomeTemplate path="/shoppingCart" exact component={ShoppingCart} />
              <HomeTemplate path="/detailPage/:detailId" exact component={CourseDetailPage} />
              <HomeTemplate path="/pay" exact component={PayPage} />
              <UserTemplate path="/login" exact component={Login} />
              <UserTemplate path="/signup" exact component={SignUp} />
              <HomeTemplate path="/" exact component={Home} />
              <HomeTemplate component={Page404} />
            </Switch>
          </ScrollToTop>
          <BackToTop
            showAt={100}
            speed={3000}
            easing="easeInOutQuint"
            style={{ zIndex: "999", margin: 10 }}
          >
            <span style={{ color: "#ef2368", fontSize: "40px" }}>
              <i className="fa fa-angle-double-up" aria-hidden="true"></i>
            </span>
          </BackToTop>

        </BrowserRouter>
      </div >
    );
  }
  componentDidMount() {
    this.database.on('value', snap => {
      let course = snap.val().course;
      if(course){
        this.props.dispatch(createAction(FETCH_COURSE, course))
      }
    })
    this.props.dispatch(local.getState());
    this.props.dispatch(local.getCart());
    this.props.dispatch(local.getCourseDetail());
    this.props.dispatch(local.getUserLogin());
  }

}

export default connect()(App);

