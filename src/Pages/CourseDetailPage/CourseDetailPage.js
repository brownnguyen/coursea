import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CourseDetailPage.scss';
import { createAction } from '../../Redux/Action/createAction';
import { ADD_CART } from '../../Redux/Action/Type';
import { aimCourse1, aimCourse2, includeCourse } from '../../constants/Constants';
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

    fixTitle = (str) => {
        let joinStr = " ";
        if (str) {
            let splitStr = str?.toLowerCase().split(' ');
            splitStr.map((item) => {
                item = item.charAt(0).toUpperCase() + item.substring(1);
                joinStr += item + " ";
            })
            return joinStr;
        }
    }
    renderCourseInclude = (includes) => {
        return (
            includes?.map((item, index) => {
                console.log(item)
                return (
                    <li key={index}>
                        {item.item} {includeCourse[index]}
                    </li>
                )
            })
        )
    }
    renderCourseIncludeDemand = () => {
        const newArr = includeCourse.filter((item, index) => index > 1);
        return (
            newArr.map((item, index) => {
                return (
                    <li key={index}>
                        {item}
                    </li>
                )
            })
        )
    }
    render() {

        let { kind, image, price, courseName, mentor, includes, content } = this.props.courseDetail;
        return (
            <section className="courseDetailPage">
                <div className="top-title-page">
                    <div className="top-title-content">
                        <div className="content">
                            <h4>Concept:
                                <span>
                                    {this.fixTitle(courseName)}
                                </span>
                            </h4>
                            <p>Mentor: {mentor}</p>
                        </div>
                    </div>
                </div>
                <div className="content-page">
                    <div className="block">
                        <h2 className="title">What you will achieve</h2>
                        <div className="detail-block">
                            <div className="detail-block-main">
                                {this.renderInfoCourse(aimCourse1)}
                            </div>
                            <div className="detail-block-main">
                                {this.renderInfoCourse(aimCourse2)}
                            </div>
                        </div>
                        <div className="description">
                            <h4>Description</h4>
                            <p>{content}</p>
                        </div>
                    </div>
                    <div className="block">
                        <img src={image} alt={kind} />
                        <div className="content-course">
                            <p>{price} $</p>
                            {this.renderButton()}
                            <h4>This course includes: </h4>
                            <ul className="courseInclude">
                                {this.renderCourseInclude(includes)}
                                {this.renderCourseIncludeDemand()}
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}
const mapStateTopProps = state => ({
    courseDetail: state.CartReducer.courseDetail,
    cart: state.CartReducer.cart,
    course: state.CourseReducer.course
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