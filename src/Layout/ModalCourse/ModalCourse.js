import React, { Component } from 'react';
import './ModalCourse.scss';
class ModalCourse extends Component {
    render() {
        let { course } = this.props;
        return (
            <div>
                <img className="img__modal" src={course.image} alt={course.kind}/>
                    <div className="modal__course">
                        <h2>Course Details</h2>
                        <div className="modal__content">
                        <h5>{course.courseName}</h5>
                        <p>{course.mentor}</p>
                        <p>{course.id}</p>
                        <p>${course.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalCourse;