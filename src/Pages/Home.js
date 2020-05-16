import React, { Component } from 'react';
import TopNews from '../Layout/TopNews/TopNews.js';
import Information from '../Layout/Infomartion/Information.js';
import Instructor from '../Layout/Instructor/Instructor.js';
import Categories from '../Layout/Categories/Categories.js';
import TrustSite from '../Layout/TrustSite/TrustSite.js';
import UpSkill from '../Layout/UpSkill/UpSkill.js';
import University from '../Layout/University/University.js';
import { createAction } from '../Action/createAction.js';
import { FETCH_COURSEDETAIL } from '../Action/Type.js';
import data from '../JSON/course.json';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
class Home extends Component {
    render() {
        return (
            <>
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
                <TopNews />
                <Information />
                <Instructor />
                <Categories />
                <TrustSite />
                <UpSkill />
                <University />
            </>
        );
    }
    componentDidMount() {
        this.props.dispatch(createAction(FETCH_COURSEDETAIL, data.course));
    }
}

export default connect()(Home);