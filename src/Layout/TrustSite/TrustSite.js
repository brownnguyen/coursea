import React, { Component } from 'react';
import data from '../../JSON/database.json';
import './TrustSite.scss';
class TrustSite extends Component {
    renderTrustSite = () => {
        return data.trustsite.map((item, index) => {
            return (
                <div className="img__trust" key={index}>
                    <img src={item.image} alt={item.detail} />
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container-fluid trustSite">
                <div className="trustSite__content">
                    <p>Industry Standard</p>
                    <h2>Trusted by companies big and small to scale their business</h2>
                    <div className="row d-flex justify-content-between trust__img">
                        {this.renderTrustSite()}
                    </div>
                    <a href="google.com" className="trustSiteStory">View our customer stories <i class="fa fa-angle-double-right"></i></a>
                </div>
                <div className="layer"></div>
            </div>
        );
    }
}

export default TrustSite;