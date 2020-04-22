import React, { Component } from 'react';
import data from '../../JSON/database.json';
import './Categories.scss';
class Categories extends Component {
    renderCategories = () => {
        return data.categories.map((item, index) => {
            return (
                <a href="google.com" className="col-3 categories__content" key={index}>
                    <div className="card">
                        <img className="card-img-top" src={item.image} width={270} height={312} alt={item.title} />
                        <div className="card-body">
                            <h4 className="card-title">{item.title}</h4>
                        </div>
                    </div>
                </a>
            )
        })
    }
    render() {
        return (
            <div className="container categories">
                <h3>Top categories</h3>
                <div className="row">
                    {this.renderCategories()}
                </div>
            </div>
        );
    }
}

export default Categories;