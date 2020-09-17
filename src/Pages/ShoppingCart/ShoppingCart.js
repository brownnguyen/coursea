import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REMOVE__COURSE, COURSE__DETAIL } from '../../Redux/Action/Type';
import { createAction } from '../../Redux/Action/createAction.js';
import './ShoppingCart.scss';
import { Link } from 'react-router-dom';
class ShoppingCart extends Component {
  renderPrice = () => {
    let { cart } = this.props;
    let toTal = cart.reduce((toTal, item) => {
      return toTal += item.price
    }, 0)
    return (
      <div className="content-price">
        <h4 className="total__title">Total</h4>
        <p className="price">{toTal} $</p>
        <button className="btn checkOut__button btn-course">Checkout</button>
      </div>
    )
  }
  renderUserInfo = () => {
    let html = '';
    if (this.props.user) {
      let { hoTen, email, soDT, taiKhoan } = this.props.user;
      html = (
        <div className="userInfo">
          <h4 className="title-user">
            Account infomation
          </h4>
          <p>Username: <span>{taiKhoan}</span></p>
          <p>Full name: <span>{hoTen}</span></p>
          <p>Email: <span>{email}</span></p>
          <p>Phone: <span>{soDT}</span></p>
          <p>Payment Account: <span>xxxx.xxx.xxx.x</span></p>
        </div>
      )
    }
    console.log(html)
    return html;
  }
  renderShoppingCart = () => {
    let { cart, removeCourse } = this.props;
    return cart.map((item, index) => {
      return (
        <div className="shopping__item" key={index}>
          <Link to={`/detailPage/${item.id}`} onClick={() => this.props.addCourseDetail(item)} className="shopping__details" style={{ cursor: 'pointer' }}>
            <div className="detailShop">
              <div className="image">
                <img src={item.image} alt={item.kind} />
              </div>
              <div className="content">
                <h5>{item.courseName}</h5>
                <p> <span>Mentor: </span>{item.mentor}</p>
                <p><span>Subject: </span>{item.kind}</p>
              </div>
            </div>
          </Link>
          <div className="btn-remove">
            <div className="_price">{item.price} $</div>
            <button className="remove__Course btn" onClick={() => removeCourse(`${item.id}`)}>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      )
    })
  }
  render() {
    let { cart } = this.props;
    return (
      <>
        <div className="shoppingCart">
          <div className="container">
            <div className="shopping__title">
              <h2 className="title">
                Shopping Cart
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="shopping-cart-content">
            <div className="content">
              {this.renderShoppingCart()}
            </div>
            <div className="content">
              {this.renderPrice()}
              {this.renderUserInfo()}
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeCourse: (id) => {
      let confirmbox = window.confirm('Are you sure to delete this course?');
      if (confirmbox) {
        dispatch(createAction(REMOVE__COURSE, id));
      }
    },
    addCourseDetail: (item) => {
      dispatch(createAction(COURSE__DETAIL, item));
    }
  }

}

const mapStateToProps = (state) => ({
  cart: state.CartReducer.cart,
  user: state.UserReducer.user
})
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);