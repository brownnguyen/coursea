import React, { Component } from 'react';
import data from '../../JSON/database.json';
import './University.scss';
class University extends Component {
    renderUni = () => {
        return data.university.map((item,index)=>{
            return (
                <div className="col-3 uni__item" key={index}>
                    <a href={item.link}>
                        <img src={item.image} width={250} alt={item.name}/>
                    </a>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container university">
                <h2>University Standard</h2>
                <div className="row uni__content">
                    {this.renderUni()}
                </div>
            </div>
        );
    }
}

export default University;