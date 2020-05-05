import React, {Component} from 'react';
import Header from './Layout/Header/Header.js';
import Home from './Pages/Home.js';
import Footer from './Layout/Footer/Footer.js';
import Course from './Pages/Course.js'
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import {connect} from 'react-redux';
import { createAction } from './Action/createAction.js';
import { STATE, CART } from './Action/Type.js';
import About from './Pages/About.js';
class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Header />
          <ScrollToTop>
          <Route path="/course/:courseId" exact component={Course} />
          </ScrollToTop>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About}/>
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
  componentDidMount(){
    this.getState();
    this.getCart()
  }
}

export default connect()(App);