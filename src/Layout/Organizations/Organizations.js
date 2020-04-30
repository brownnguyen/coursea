import React, { Component } from 'react';
import database from '../../JSON/database.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './Organization.scss';
class Organizations extends Component {
    renderOrganization = () => {
        return database.organizations.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <img src={item.image} alt={item.id} width={150} />
                </div>
            )
        })
    }
    renderCarousel = () => {
        return database.organizationComment.map((item, index) => {
            let {content, author, position} = item;
            return (
                <div key={index}>
                    <div className="card">
                        <p className="card-title">{content}</p>
                        <div className="card-body">
                            <h4 className="card-author">{author}</h4>
                            <p className="card-position">{position}</p>
                        </div>
                    </div>
                </div>

            )
        })
    }
    render() {
        return (
            <div className="container organization">
                <div className="row">
                    <div className="col-6 organization__content">
                        <h3 className="title">Helping thousands of organizations transform at scale</h3>
                        <div className="row organization__details">
                            {this.renderOrganization()}
                        </div>
                        <div className="col-6 organization__comment">
                            <Carousel className="organization__carousel" onChange={this.onChange} onClickItem={this.onClickItem}>
                                {this.renderCarousel()}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Organizations;