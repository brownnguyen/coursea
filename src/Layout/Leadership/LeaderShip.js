import React, { Component } from 'react';
import database from '../../JSON/database.json';
import './LeaderShip.scss';
import Popup from 'reactjs-popup';
class LeaderShip extends Component {
    renderLeaderCard = () => {
        return database.leadership.map((item, index) => {
            return (
                <Popup padding={0} modal trigger={
                    <div className="col-lg-3 col-md-4 col-sm-6 content" key={index}>
                        <div className="card">
                            <img className="card-img-top" src={item.image} alt={item.id} />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.position}</p>
                            </div>
                        </div>
                    </div>}>
                    {close => (<div className="contentBottomModal">
                        <span className="close" onClick={close}>&times;</span>
                        <div className="modalImgLeaderShip col-sm-4">
                            <img src={item.modalImage} alt={item.id} />
                        </div>
                        <div className="content__modalImageLeaderShip col-sm-8">
                            <div className="content__modalLeaderShip">
                                <h3 className="title__LeaderShip">{item.name}</h3>
                                <p className="position__LeaderShip">{item.position}</p>
                                <h6 className="bio__LeaderShip">Bio</h6>
                                <p>{item.about}</p>
                            </div>
                        </div>
                    </div>)}
                </Popup>
            )
        })
    }
    render() {
        return (
            <div className="container-fluid topLeaderShip">
                <div className="container-fluid leaderShip__details">
                    <div className="topTitle">
                        <h3>A leadership team with vision</h3>
                        <p>Our executives lead by example and guide us to accomplish great things every day.</p>
                    </div>
                    <div className="row content__leaderShip">
                        {this.renderLeaderCard()}
                    </div>
                </div>
            </div>
        );
    }
}

export default LeaderShip;