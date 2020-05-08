import React, { Component } from 'react';
import './CourseDetail.scss';
import { connect } from 'react-redux';
import { ADD_CART, COURSE__DETAIL } from '../../Action/Type';
import { createAction } from '../../Action/createAction';
import { Link } from 'react-router-dom';
import ModalCourse from '../ModalCourse/ModalCourse';
class CourseDetail extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            delay: false
        }
    }
    handleMouseHover(bool) {
        this.setState(this.toggleHoverState(bool));
    }
    toggleHoverState(state) {
        console.log(state);
        return {
            isHovering: state
        };
    }
    renderButton = () => {
        let { course, addCart, cart } = this.props;
        let item = cart.find(item => item.id === course.id);
        if (item) {
            return (
                <Link to="/shoppingCart" className="btn goToCart">Go to cart</Link>
            )
        } else {
            return (
                <button className="btn add__course" onClick={() => addCart(course)}>Add to cart</button>
            )
        }
    }
    render() {
        let { course } = this.props;
        return (
            <>
                <Link to={`/detailPage/${course.id}`} className="course__detail" onMouseEnter={() => this.handleMouseHover(true)}
                    onMouseLeave={() => this.handleMouseHover(false)}
                    onClick={() => this.props.addCourseDetail(course)}>
                    <div className="card courseDetail">
                        <div className="card__img">
                            <img className="card-img-top image" src={course.image} alt={course.courseName} />
                            <div className="layer"></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{course.courseName}</h5>
                            <p className="card-text">{course.mentor}</p>
                            <p className="price text-right">{course.price} $</p>
                        </div>
                    </div>
                </Link>
                {
                    this.state.isHovering &&
                    <div className="content__modal">
                        <ModalCourse course={course} onMouseEnter={() => this.handleMouseHover(true)}
                            onMouseLeave={() => this.handleMouseHover(false)} />
                        {this.renderButton()}
                    </div>
                }


            </>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCart: item => {
            const cartItem = { ...item, quantity: 1 }
            dispatch(createAction(ADD_CART, cartItem));
        },
        addCourseDetail: item => {
            dispatch(createAction(COURSE__DETAIL, item));
            console.log(item)
        }
    }
}
const mapStateToProp = (state) => ({
    cart: state.CartReducer.cart
})
export default connect(mapStateToProp, mapDispatchToProps)(CourseDetail);