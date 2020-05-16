import React, {Component} from 'react';
import Header from './Layout/Header/Header.js';
import Home from './Pages/Home.js';
import Footer from './Layout/Footer/Footer.js';
import Course from './Pages/Course.js'
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import {connect} from 'react-redux';
import { createAction } from './Action/createAction.js';
import { STATE, CART, DETAIL } from './Action/Type.js';
import About from './Pages/About.js';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart.js';
import CourseDetailPage from './Pages/CourseDetailPage/CourseDetailPage.js';
import Login from './Layout/Login/Login.js';
import SignUp from './Layout/SignUp/SignUp.js';
class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Header />
          <ScrollToTop>
          <Route path="/course/:courseId" exact component={Course} />
          </ScrollToTop>
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About}/>
          <Route path="/shoppingCart" exact component={ShoppingCart}/>
          <Route path="/detailPage/:detailId" exact component={CourseDetailPage}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={SignUp}/>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
  getCart = () => {
    const cartStr = localStorage.getItem('cart');
    if(cartStr){
      this.props.dispatch(createAction(CART,JSON.parse(cartStr)))
    }
  }
  getState = () => {
    const stateStr = localStorage.getItem('state');
    
    if(stateStr){
      this.props.dispatch(createAction(STATE,JSON.parse(stateStr)));
     
    }
  }
  getCourseDetail = () => {
    const detailStr = localStorage.getItem('detail');
    if(detailStr){
      this.props.dispatch(createAction(DETAIL, JSON.parse(detailStr)));
    }
  }
  componentDidMount(){
    this.getState();
    this.getCart();
    this.getCourseDetail();
  }
}

export default connect()(App);