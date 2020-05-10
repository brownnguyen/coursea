import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CourseDetailPage.scss';
import { createAction } from '../../Action/createAction';
import { ADD_CART } from '../../Action/Type';
class CourseDetailPage extends Component {
    renderButton = () => {
        let { cart, addCart, courseDetail } = this.props;
        let item = cart.find(item => item.id === courseDetail.id);
        if (item) {
            return (
                <Link to="/shoppingCart" className="btn LinkToCart" exact>Go to Cart</Link>
            )
        }
        else {
            return (
                <button className="btn add__course" onClick={() => addCart(courseDetail)}>Add to cart</button>
            )
        }
    }
    render() {
        let { courseDetail } = this.props;
        return (
            <>
                <div className="container-fluid courseDetailPage p-0">
                    <div className="layer__detail"></div>
                    <div className="layer__detail2"></div>
                    <div className="row content__courseDetail">
                        <div className="col-8 courseDetailPage__title">
                            <h4>{courseDetail.courseName}</h4>
                            <p>{courseDetail.mentor}</p>
                            <span>Course code:  {courseDetail.id}</span>
                        </div>
                        <div className="col-4 courseDetail__img">
                            <div className="img__details">
                                <img src={courseDetail.image} alt={courseDetail.kind} />
                            </div>
                            <div className="price__details">
                                <p className="price">Price: $ {courseDetail.price}</p>
                            </div>
                            {this.renderButton()}
                            <h5>This course include: </h5>
                            <ul className="courseDetail__info">
                                <li><i className="fab fa-airbnb"></i>9 hours on-demand video</li>
                                <li><i className="fab fa-airbnb"></i>15 articles</li>
                                <li><i className="fab fa-airbnb"></i>6 downloadable resources</li>
                                <li><i className="fab fa-airbnb"></i>Full lifetime access</li>
                                <li><i className="fab fa-airbnb"></i>Access on mobile and TV</li>
                                <li><i className="fab fa-airbnb"></i>Certificate of Completion</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row course__reach mx-auto">
                        <div className="col-8 content__details__reach">
                            <h5>What you'll learn</h5>
                            <div className="content__reach row">
                                <div className="col-6 p-0">
                                    <ul className="ul__reach">
                                        <li><i className="fa fa-anchor"></i>
                                        Become a Master in Leadership</li>
                                        <li><i className="fa fa-anchor"></i>
                                        Delegate effectively to empower their team</li>
                                        <li><i className="fa fa-anchor"></i>
                                        Understand academic theories surrounding leadership styles and techniques</li>
                                        <li><i className="fa fa-anchor"></i>
                                        Know the difference between delegating styles and which one is appropriate for each situation</li>
                                        <li><i className="fa fa-anchor"></i>
                                        Spend more time developing plans and ideas for the future</li>
                                    </ul>
                                </div>
                                <div className="col-6 p-0">
                                    <ul className="ul__reach">
                                        <li><i class="fa fa-anchor"></i>
                                        Be a better boss, and run a highly effective team</li>
                                        <li><i class="fa fa-anchor"></i>

Have a healthy work life balance, with a happy environment</li>
                                        <li><i class="fa fa-anchor"></i>
                                        Build a vast array of practical tools to be a fantastic leader</li>
                                        <li><i class="fa fa-anchor"></i>
                                        Feel confident enough to involve employees in decision making and planning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
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