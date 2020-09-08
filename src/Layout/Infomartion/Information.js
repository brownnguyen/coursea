import React, { Component } from 'react';
import data from '../../JSON/database.json';
import './Information.scss';
class Information extends Component {
    renderInfo = () => {
        return data.news.map((item, index) => {
            return (
                <div className="col-md-6 col-sm-12 py-3" key={index}>
                    <div className="card">
                        <h4 className="title"><i className="fa fa-angle-double-right"></i> {item.title}</h4>
                        <div className="card-body px-0 py-2">
                            <p className="card-text">{item.content}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <div className='container information'>
                    <div className="row m-0">
                        <div className="col-lg-5 col-md-12 top__info">
                            <h2>
                                We build awesome course
                                and university sites!
                            </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className="col-lg-7 col-md-12 bot__info">
                            <div className="row">
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