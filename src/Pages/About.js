import React, { Component } from 'react';
import TopContentAbout from '../Layout/TopContentAbout/TopContentAbout';
import Organizations from '../Layout/Organizations/Organizations';
import Glance from '../Layout/Glance/Glance';
import LeaderShip from '../Layout/Leadership/LeaderShip';
import Particles from 'react-particles-js';

class About extends Component {
    render() {
        return (
            <div>
                <Particles style={{ position: "absolute", zIndex: 1}}
                    params={{
                        "particles": {
                            "number": {
                                "value": 100
                            },
                            "size": {
                                "value": 1
                            }
                        }
                    }} />
                <TopContentAbout />
                <Organizations />
                <Glance />
                <LeaderShip />
            </div>
        );
    }
}

export default About;