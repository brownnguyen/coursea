import React, { Component } from 'react';
import TopContentAbout from '../Layout/TopContentAbout/TopContentAbout';
import Organizations from '../Layout/Organizations/Organizations';

class About extends Component {
    render() {
        return (
            <div>
                <TopContentAbout/>
                <Organizations/>
            </div>
        );
    }
}

export default About;