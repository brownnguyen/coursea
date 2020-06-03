import React, { Component } from 'react';
import Header from './Layout/Header/Header.js';
import Home from './Pages/Home.js';
import Footer from './Layout/Footer/Footer.js';
import Course from './Pages/Course.js'
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { connect } from 'react-redux';
import About from './Pages/About.js';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart.js';
import CourseDetailPage from './Pages/CourseDetailPage/CourseDetailPage.js';
import Login from './Layout/Login/Login.js';
import SignUp from './Layout/SignUp/SignUp.js';
import { local } from './Services/LocalStorage.js';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <ScrollToTop>
            <Route path="/course/:courseId" exact component={Course} />
          </ScrollToTop>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shoppingCart" exact component={ShoppingCart} />
          <Route path="/detailPage/:detailId" exact component={CourseDetailPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
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

