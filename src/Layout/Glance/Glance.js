import React, { Component } from 'react';
import database from '../../JSON/database.json';
import './Glance.scss';
class Glance extends Component {
    renderGlance = () => {
        return database.glance.map((item, index) => {
            return (
                <li key={index}>
                    <p>{item.content}</p>
                </li>
            )
        })
    }
    render() {
        return (
            <div className="container-fluid p-0 glance">
                <div className="row">
                    <div className="col-6 glance__img">
                    </div>
                    <div className="col-6 glance__content">
                        <div className="background__content">
                            <div className="content">
                                <h2> At a glance</h2>
                                <ul>
                                    {this.renderGlance()}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Glance;