import React, { Component } from 'react';
import TopContentAbout from '../Layout/TopContentAbout/TopContentAbout';
import Organizations from '../Layout/Organizations/Organizations';
import Glance from '../Layout/Glance/Glance';
import LeaderShip from '../Layout/Leadership/LeaderShip';
import Particles from 'react-particles-js';
import { connect } from 'react-redux';
import LoadingGlobal from '../Layout/LoadingGLobal/LoadingGlobal';

class About extends Component {
    state = {
        showLoading: true
    }
    loading = () => {
        if (this.state.showLoading) {
            return (<LoadingGlobal />)
        }
        else {
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
                    <TopContentAbout />
                    <Organizations />
                    <Glance />
                    <LeaderShip />
                </>
            )
        }
    }
    render() {
        return (
            <>
                {this.loading()}
            </>
        );
    }
    componentDidMount() {
        let timeOn = setTimeout(() => {
            this.setState({
                showLoading: false
            })
        }, 1500);
    }
    componentWillUnmount() {
        clearTimeout(this.timeon)
    }
}


export default connect()(About);