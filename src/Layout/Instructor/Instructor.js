import React, { Component } from 'react';
import img from '../../img/instructor.jpg';
import './Instructor.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
class Instructor extends Component {
    checkUser = () => {
        const user = this.props.user;
        if (user) {
            return (
                <NavLink to="/course" className="button-start btn-course" exact>Start Learning</NavLink>
            )
        }
        else {
            return (
                <NavLink to="/signup" className="button-start btn-course" exact>Start Learning</NavLink>
            )
        }
    }
    render() {
        return (
            <div className="instructor">
                <div className="grey__background"></div>
                <div className="main__instructor container">
                    <div className="instructor-content">
                        <div className="img__instructor">
                            <img src={img} width={400} alt="instructor " />
                        </div>
                        <div className="instructor__content">
                            <h3>Discover a universal</h3>
                            <p className="text">Top instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                            {this.checkUser()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.UserReducer.user
})
export default connect(mapStateToProps, null)(Instructor);