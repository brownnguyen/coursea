import React, { Component } from 'react';
import './ModalCourse.scss';
class ModalCourse extends Component {
    render() {
        let { course } = this.props;
        return (
            <div>
                    <div className="modal__course">
                        <div className="modal__content">
                        <p>{course.id}</p>
                        <p>${course.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalCourse;