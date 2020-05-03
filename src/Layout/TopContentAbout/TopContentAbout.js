import React, { Component } from 'react';
import './TopContentAbout.scss';
class TopContentAbout extends Component {
    render() {
        return (
            <div className="container-fluid topContentAbout">
                <div className="layer"></div>
                <div className="row aboutTop">
                    <div className="content">
                        <h2 className="title">The technology <span>skills</span> platform</h2>
                        <p className="details__content">At Coursea, we believe everyone should have the opportunity to create progress through
                        technology and develop the skills of tomorrow.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopContentAbout;