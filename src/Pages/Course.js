import React, { Component } from 'react';
import CourseList from '../Layout/CourseList/CourseList.js';
import { connect } from 'react-redux';
class Course extends Component {
    render() {
        return (
            <div>
                <CourseList />
            </div>
        );
    }

}

export default connect()(Course);