import React, { Component } from 'react';
import data from '../../JSON/database.json';
import './Information.scss';
class Information extends Component {
    renderInfo = () => {
        return data.news.map((item, index) => {
            return (
                <div className="info-card" key={index}>
                    <h4 className="title"><i className="fa fa-angle-double-right"></i> {item.title}</h4>
                    <div className="card-body px-0 py-2">
                        <p className="card-text">{item.content}</p>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <div className='information'>
                    <div className="information-content">
                        <div className="top__info">
                            <div className="top-content-info">
                                <h2 className="title">
                                    We build awesome course
                                    and university sites!
                            </h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                        <div className="bot__info">
                            <div className="bot-card-content">
                                {this.renderInfo()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Information;