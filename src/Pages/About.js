import React, { Component } from 'react';
import TopContentAbout from '../Layout/TopContentAbout/TopContentAbout';
import Organizations from '../Layout/Organizations/Organizations';
import Glance from '../Layout/Glance/Glance';
import LeaderShip from '../Layout/Leadership/LeaderShip';

class About extends Component {
    render() {
        return (
            <div>
                <TopContentAbout />
                <Organizations />
                <Glance />
                <LeaderShip />
            </div>
        );
    }
}

export default About;