import React, { Component } from 'react';
import './ShowCourse.scss';
class ShowCourse extends Component {
    render() {
        let { course } = this.props;
        return (
            <div>
                <div className="card showCourse">
                    <div className="showCourse__content">
                        <img className="showCourse__img" src={course.image} alt={course.id} />
                        <div className="showCourse__body">
                            <h4 className="card-title">{course.courseName}</h4>
                            <p className="card-text">{course.mentor}</p>
                            <button className="btn showCourse__button">Add to card</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowCourse;