import React, { Component } from 'react';
import img from '../../img/instructor.jpg';
import Popup from 'reactjs-popup';
import SignUp from '../SignUp/SignUp.js';
import './Instructor.scss';
import { NavLink } from 'react-router-dom';
export default class Instructor extends Component {
    // renderSignUp = () => {
    //     return (
    //         <Popup className="mx-auto signUp__Form" width={300} modal trigger={
    //             <button>Start learning</button>
    //         }>{() => (
    //             <>
    //                 <SignUp />
    //                 <p className="text-center">Already have account? <span onClick={() => this.renderSignIn()} className="SignInSignUp" style={{ cursor: "pointer" }}>Sign In</span></p>
    //             </>
    //         )}
    //         </Popup>
    //     )
    // }
    render() {
        return (
            <div className="container-fluid background__instructor">
                <div className="grey__background"></div>
                <div className="container mx-auto main__instructor">
                    <div className="row instructor">
                        <div className="col-lg-6 text-right pr-4 img__instructor">
                            <img src={img} width={400} alt="instructor " />
                        </div>
                        <div className="col-lg-6 col-md-12 my-auto text-center instructor__content pl-4">
                            <h3>Discover a universal</h3>
                            <p>Top instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                            <div className="button__instructor py-auto">
                                <NavLink to="/signup" className="button-start" exact>Start Learning</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}