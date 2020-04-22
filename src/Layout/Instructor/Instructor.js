import React, { Component } from 'react';
import img from '../../img/instructor.jpg';
import './Instructor.scss';
export default class Instructor extends Component {
    render() {
        return (
            <div className="container-fluid background__instructor">
                <div className="row mx-auto instructor">
                    <div className="col-6 text-right pr-4">
                        <img src={img} width={400} alt="instructor " />
                    </div>
                    <div className="col-6 my-auto text-center instructor__content pl-4">
                        <h3>Become an instructor</h3>
                        <p>Top instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                        <div className="button__instructor">
                            <button>Start teaching</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}