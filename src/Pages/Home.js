import React, { Component } from 'react';
import TopNews from '../Layout/TopNews/TopNews.js';
import Information from '../Layout/Infomartion/Information.js';
import Instructor from '../Layout/Instructor/Instructor.js';
import Categories from '../Layout/Categories/Categories.js';
import TrustSite from '../Layout/TrustSite/TrustSite.js';
import UpSkill from '../Layout/UpSkill/UpSkill.js';
import University from '../Layout/University/University.js';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import LoadingGlobal from '../Layout/LoadingGLobal/LoadingGlobal.js';
class Home extends Component {
    state = {
        showLoading: true
    }
    fixTitle = () => {
        let { course } = this.props;
        let title = "";
        let newKind = " ";
        return course.map((item, index) => {
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

    loading = () => {
        let xhtml = null;
        if (this.state.showLoading) {
            xhtml = (
                <LoadingGlobal />
            )
        }
        else {
            xhtml = null;
        }
        return xhtml;
    }
    render() {
        return (
            <>
                {this.loading()}
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
        // this.fixTitle();
        // this.props.dispatch(createAction(FETCH_COURSE, course));
        let timeOn = setTimeout(() => {
            this.setState({
                showLoading: false
            })
        }, 1500);
    }
    componentWillUnmount() {
        clearTimeout(this.timeOn)
    }
}
const mapStateToProps = (state) => ({
    course: state.CourseReducer.course
})
export default connect(mapStateToProps)(Home);