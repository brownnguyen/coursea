import React, { Component } from 'react';
import img from '../../img/img-ethical-hacking.png'
import data from '../../JSON/database.json';
import "./UpSkill.scss";
class UpSkill extends Component {
    render() {
        return (
            <div className="container upskill">
                <div className="skill__spread">
                    <div className="content img__hacking">
                        <img src={img} width={600} height={500} alt="ethical-hacking" />
                    </div>
                    <div className="content">
                        <p className="top">Up skill</p>
                        <h3>Build for whatever strikes next</h3>
                        <p>Ensure your teams are up to date on the latest best practices and threat mitigation techniques.</p>
                        <ul>
                            {
                                data.upskill.map((item, index) => {
                                    return (
                                        <li key={index}>{item.text}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpSkill;