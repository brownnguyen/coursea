import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import img404 from '../../img/404.png';
import './Page404.scss';
export default class Page404 extends Component {
    render() {
        return (
            <section className="page404">
                <div className="content-404">
                    <h2 className="title404">Oops!</h2>
                    <p className="text404">The page that you're looking for is out of space</p>
                    <div className="img">
                        <img className="img404" src={img404} alt="404" />
                    </div>
                    <Link to="/" className="btn-page404">
                        Fly to home
                </Link>
                </div>
            </section>
        )
    }
}
