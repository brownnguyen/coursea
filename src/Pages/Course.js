import React, { Component } from 'react';
import CourseList from '../Layout/CourseList/CourseList.js';
import LoadingGlobal from '../Layout/LoadingGLobal/LoadingGlobal.js';
class Course extends Component {
    state = {
        showLoading: true
    }
    renderMain = () => {
        if (this.state.showLoading) {
            return <LoadingGlobal />
        }
    }
    render() {
        return (
            <>
                {this.renderMain()}
                <CourseList />
            </>
        );
    }
    componentDidMount() {
        let timeOn = setTimeout(() => {
            this.setState({
                showLoading: false
            })
        }, 1500)
    }
    componentWillUnmount() {
        clearTimeout(this.timeOn)
    }
}

export default Course;