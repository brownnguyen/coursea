import React, { Component } from 'react'
import './ErrorNote.scss';
export default class ErrorNote extends Component {

    render() {
        return (
            <section className="error-note">
                <div className="icon">
                    <i className="fa fa-frown-o" aria-hidden="true"></i>
                </div>
                <h3 className="error-title">
                    Oops!
                    <span>Some thing went wrong</span>
                </h3>
            </section>
        )
    }
}
