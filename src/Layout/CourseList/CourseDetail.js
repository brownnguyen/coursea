import React, { Component } from 'react';
import './CourseDetail.scss';
class CourseDetail extends Component {
    render() {
        let { course } = this.props;
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
                        </div>
                </div>
            </div>
        );
    }
}

export default CourseDetail;