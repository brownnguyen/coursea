import React, { Component } from 'react';
import TopNews from '../Layout/TopNews/TopNews.js';
import Information from '../Layout/Infomartion/Information.js';
import Instructor from '../Layout/Instructor/Instructor.js';
import Categories from '../Layout/Categories/Categories.js';
import TrustSite from '../Layout/TrustSite/TrustSite.js';
import UpSkill from '../Layout/UpSkill/UpSkill.js';
import University from '../Layout/University/University.js';
class Home extends Component {
    render() {
        return (
            <>
            <TopNews/>
            <Information/>
            <Instructor/>
            <Categories/>
            <TrustSite/>
            <UpSkill/>
            <University/>
            </>
        );
    }
}

export default Home;