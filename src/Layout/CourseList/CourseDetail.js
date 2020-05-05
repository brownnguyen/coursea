import React, { Component } from 'react';
import './CourseDetail.scss';
import {connect} from 'react-redux';
import { ADD_CART } from '../../Action/Type';
import { createAction } from '../../Action/createAction';
class CourseDetail extends Component {
    render() {
        let { course, addCard} = this.props;
        return (
            <div className="course__detail">
                <div className="card courseDetail">
                    <div className="card__img">
                        <img className="card-img-top image" src={course.image} alt={course.courseName} />
                        <div className="layer"></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{course.courseName}</h5>
                            <p className="card-text">{course.mentor}</p>
                            <p className="price text-right">{course.price} $</p>
                            <button className="btn add__course" onClick={()=>addCard(course)}>Add to cart</button>
                        </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCard: (item) => {
            const cartItem = {...item, quantity: 1}
            dispatch(createAction(ADD_CART,cartItem));
            console.log(createAction(ADD_CART,cartItem));
        }
    }
}
export default connect(null, mapDispatchToProps)(CourseDetail);