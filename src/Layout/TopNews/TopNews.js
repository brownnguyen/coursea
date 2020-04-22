import React, { Component } from 'react';
import './TopNews.scss';
class TopNews extends Component {
    render() {
        return (
            <div className="topnews">
                <div className='layer'></div>
                <div className="topnews-info">
                    <h2>Learn on your schedule</h2>
                    <div className='input'>
                        <input className="form-control-input" placeholder="Search for anything" />
                        <button type="button"><i className="fa fa-search"></i></button>
                    </div>
                    <p>Study any topic, anytime.<br /> Choose from thousands of expert-led courses now.</p>
                </div>
            </div>
        );
    }
}

export default TopNews;