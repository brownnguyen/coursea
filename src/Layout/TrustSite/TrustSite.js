import React, { Component } from 'react';
import data from '../../JSON/database.json';
import './TrustSite.scss';
class TrustSite extends Component {
    renderTrustSite = () => {
        return data.trustsite.map((item, index) => {
            return (
                <div className="img__trust" key={index}>
                    <img src={item.image} alt={item.detail} width={120} />
                </div>
            )
        })
    }
    render() {
        return (
            <div className="trustSite">
                <div className="trustSite__details">
                    <div className="container trustSite__bot__details">
                        <div className="trustSite__content">
                            <div className="text">
                                <p>Industry Standard</p>
                                <h2 className="title">Trusted by companies big and small to scale their business</h2>
                            </div>
                            <div className="trust__img">
                                {this.renderTrustSite()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrustSite;