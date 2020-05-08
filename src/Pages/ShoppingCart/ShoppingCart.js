import React, { Component } from 'react';
import { connect } from 'react-redux';
import {REMOVE__COURSE} from '../../Action/Type.js';
import { createAction } from '../../Action/createAction.js';
import './ShoppingCart.scss';
class ShoppingCart extends Component {
    renderPrice = () => {
        let { cart } = this.props;
        let toTal = cart.reduce((toTal, item) => {
            return toTal += item.price
        }, 0)
        return (
            <div>
                <h4 className="total__title">Total:</h4>
                <p className="price">{toTal} $</p>
                <button className="btn checkOut__button">Checkout</button>
            </div>
        )

    }
    renderShoppingCart = () => {
        let { cart, removeCourse } = this.props;
        return cart.map((item, index) => {
            return (
                <div className="row shopping__item" key={index}>
                    <div className="col-md-7 col-7">
                        <div className="row ">
                            <div className="image col-4">
                                <img src={item.image} alt={item.kind} />
                            </div>
                            <div className="content col-8">
                                <h5>{item.courseName}</h5>
                                <p>{item.mentor}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-2 text-center my-auto _price">{item.price} $</div>
                    <div className="col-md-2 col-3 text-center my-auto">
                        <button className="remove__Course btn" onClick={() => removeCourse(`${item.id}`)}>Remove</button>
                    </div>
                </div>
            )
        })
    }
    render() {
        let {cart} = this.props;
        return (
            <div className="container-fluid shoppingCart">
                <div className="shopping__title">
                    <h2 className="title">Shopping Cart</h2>
                </div>
                <div className="container cart__content">
                    <div className="row mx-auto">
                        <div className="col-lg-8">
                            <div className="countCourse">
                                <p className="count__title">{cart.length} {cart.length === 1? "Course" : "Courses"} In Cart</p>
                                {this.renderShoppingCart()}
                            </div>
                        </div>
                        <div className="col-lg-4 shopping__total">
                            {this.renderPrice()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeCourse: (id) => {
            dispatch(createAction(REMOVE__COURSE, id));
            console.log(dispatch(createAction(REMOVE__COURSE, id)));
        }
    }

}

const mapStateToProps = (state) => ({
    cart: state.CartReducer.cart
})
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);