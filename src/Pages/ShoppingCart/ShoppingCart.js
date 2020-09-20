import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REMOVE__COURSE, COURSE__DETAIL } from '../../Redux/Action/Type';
import { createAction } from '../../Redux/Action/createAction.js';
import Slider from "react-slick";
import './ShoppingCart.scss';
import CourseDetail from '../../Layout/CourseList/CourseDetail';
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
  renderOtherCarousel = () => {
    const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <>
        <h4 className="title-carousel">Other courses that you might interested in</h4>
        <Slider {...settings}>
          {this.props.course.splice(100, 200)?.map((item, index) => {
            return (
              <CourseDetail course={item} key={index} />
            )
          })}
        </Slider>
      </>
    );
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
                Cart
                <span className="cart-span">Home/Cart</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <h3 className="title-item">
            Items on cart
          </h3>
          <div className="shopping-cart-content">
            <div className="content">
              {this.renderShoppingCart()}
            </div>
            <div className="content">
              {this.renderPrice()}
              {this.renderUserInfo()}
            </div>
          </div>
          <div className="carousel-shopcart">
            {this.renderOtherCarousel()}
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
  user: state.UserReducer.user,
  course: state.CourseReducer.course
})
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);