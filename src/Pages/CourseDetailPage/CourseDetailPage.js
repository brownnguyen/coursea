import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CourseDetailPage.scss';
import { createAction } from '../../Action/createAction';
import { ADD_CART } from '../../Action/Type';
import { aimCourse2, aimCourse1 } from '../../constants/Constants';
class CourseDetailPage extends Component {
    renderButton = () => {
        let { cart, addCart, courseDetail } = this.props;
        let item = cart.find(item => item.id === courseDetail.id);
        if (item) {
            return (
                <Link to="/shoppingCart" className="btn LinkToCart">Go to Cart</Link>
            )
        }
        else {
            return (
                <button className="btn add__course" onClick={() => addCart(courseDetail)}>Add to cart</button>
            )
        }
    }

    renderInfoCourse = (item) => {
        return (
            <ul>
                {item.map((text, index) => {
                    return (
                        <li key={index}>
                            {text}
                        </li>
                    )
                })}

            </ul>
        )
    }
    // <i className="fa fa-anchor"></i>
    // <i className="fab fa-airbnb"></i>
    render() {
        const icon = <i className="fa fa-anchor"></i>
        let { kind, image, price } = this.props.courseDetail;
        return (
            <section className="courseDetailPage">
                <div className="content-page">
                    <div className="block">
                        <h2 className="title">What you will learn</h2>
                        <div className="detail-block">
                            <div>
                                {this.renderInfoCourse(aimCourse1)}
                            </div>
                            <div>
                                {this.renderInfoCourse(aimCourse2)}
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <img src={image} alt={kind} />
                        <p>{price} $</p>
                        {this.renderButton()}
                        <h4>This course include: </h4>
                        {this.renderInfoCourse(aimCourse1)}
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateTopProps = state => ({
    courseDetail: state.CartReducer.courseDetail,
    cart: state.CartReducer.cart
})
const mapDispatchToProps = dispatch => {
    return {
        addCart: (item) => {
            const cartItem = { ...item, quantity: 1 }
            dispatch(createAction(ADD_CART, cartItem))
        }
    }

}
export default connect(mapStateTopProps, mapDispatchToProps)(CourseDetailPage);