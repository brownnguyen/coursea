import React, { Component } from 'react';
import img from '../../img/instructor.jpg';
import './Instructor.scss';
import { NavLink } from 'react-router-dom';
export default class Instructor extends Component {
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
                            <NavLink to="/signup" className="button-start" exact>Start Learning</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}