import React, { Component } from 'react';
import data from '../../JSON/database.json';
import './TrustSite.scss';
class TrustSite extends Component {
    renderTrustSite = () => {
        return data.trustsite.map((item, index) => {
            return (
                <div className="img__trust col-sm-4 col-lg-2" key={index}>
                    <img src={item.image} alt={item.detail} width={120}/>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container-fluid trustSite">
                <div className="trustSite__details">
                    <div className="layer"></div>
                    <div className="container trustSite__bot__details">
                        <div className="row">
                            <div className="trustSite__content">
                                <p>Industry Standard</p>
                                <h2>Trusted by companies big and small to scale their business</h2>
                                <div className="row d-flex justify-content-between trust__img">
                                    {this.renderTrustSite()}
                                </div>
                                <a href="google.com" className="trustSiteStory">View our customer stories <i className="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrustSite;