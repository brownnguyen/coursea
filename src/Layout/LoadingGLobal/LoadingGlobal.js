import React, { Component } from 'react'
import loading from '../../img/img-logo-transparent.png';
import './LoadingGlobal.scss';
export default class LoadingGlobal extends Component {
    render() {
        return (
            <div className="loading-global">
                <img src={loading} alt="coursea" />
            </div>
        )
    }
}