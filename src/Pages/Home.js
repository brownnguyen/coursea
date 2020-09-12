import React, { Component } from 'react';
import TopNews from '../Layout/TopNews/TopNews.js';
import Information from '../Layout/Infomartion/Information.js';
import Instructor from '../Layout/Instructor/Instructor.js';
import Categories from '../Layout/Categories/Categories.js';
import TrustSite from '../Layout/TrustSite/TrustSite.js';
import UpSkill from '../Layout/UpSkill/UpSkill.js';
import University from '../Layout/University/University.js';
import { createAction } from '../Redux/Action/createAction.js';
import { FETCH_COURSE } from '../Redux/Action/Type';
import data from '../JSON/course.json';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
let course = data.course;
class Home extends Component {
    fixTitle = () => {
        let title = "";
        let newKind = " ";
        return data.course.map((item, index) => {
            let strSplit = [];
            strSplit = item.courseName.split(' ');
            strSplit = strSplit.map((item) => {
                return item.charAt(0).toUpperCase() + item.slice(1)
            })
            title = strSplit.join(" ");
            newKind = item.kind.charAt(0).toUpperCase() + item.kind.slice(1);
            course[index].kind = newKind;
            course[index].courseName = title;
        })
    }
    render() {
        return (
            <>
                <Particles style={{ position: "absolute", zIndex: 1 }}
                    params={{
                        "particles": {
                            "number": {
                                "value": 30
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
        this.fixTitle();
        this.props.dispatch(createAction(FETCH_COURSE, course));
    }
}

export default connect()(Home);