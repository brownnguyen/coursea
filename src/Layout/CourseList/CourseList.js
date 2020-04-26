import React, { Component } from 'react';
import './CourseList.scss';
import data from '../../JSON/course.json';
import CourseDetail from './CourseDetail';
import { connect } from 'react-redux';
import { FETCH_COURSEDETAIL, TOTAL_ITEM, KIND } from '../../Action/Type.js';
import { createAction } from '../../Action/createAction.js';
import Pagination from 'react-js-pagination';
class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            // kind: 'all',
            // totalItem: 0,
        }
        this.getKind = this.getKind.bind(this)
    }
    getKind = (e) => {
        let value = e.target.id;
        this.props.dispatch(createAction(KIND, value))
        console.log(value)
    }
    renderCategories = () => {
        let { course } = this.props;
        let { kind } = this.props;
        console.log(kind)
        if (kind === "all") {
            let { activePage } = this.state;
            let start = (activePage - 1) * 28;
            let end = (activePage - 1) * 28 + 28;
            return data.course.map((item, index) => {
                return (
                    <div className="col-3 itemCourse" key={index}>
                        <CourseDetail course={item} />
                    </div>
                )
            }).slice(start, end);
        }
        else {
            let newarray = course.filter(item => item.kind === kind);
            return newarray.map((item, index) => {
                return (
                    <div className="col-3 itemCourse" key={index}>
                        <CourseDetail course={item} />
                    </div>
                )
            })
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        return (
            <div className="container-fluid courseList">
                <div className="top">
                    <div className="layer"></div>
                    <div className="content">
                        <h3>Cour<span>sea</span></h3>
                        <p>Academy</p>
                    </div>
                </div>
                <div className="courseDetail">
                    <div className="title">
                        <h4 id="all" onClick={this.getKind}>All Categories</h4>
                    </div>
                    <ul className="list__course">
                        <li id="design" onClick={this.getKind}>Design</li>
                        <li id="development" onClick={this.getKind}>Development</li>
                        <li id="marketing" onClick={this.getKind}>Marketing</li>
                        <li id="software" onClick={this.getKind} >IT & software</li>
                        <li id="Personal" onClick={this.getKind}>Personal Development</li>
                        <li id="Business" onClick={this.getKind}>Business</li>
                        <li id="Photography" onClick={this.getKind}>Photography</li>
                        <li id="Music" onClick={this.getKind}>Music</li>
                    </ul>
                    <div className="container">
                        <div className="row">
                            {this.renderCategories()}
                        </div>
                    </div>
                </div>
                <div className="pagination__course">
                    <Pagination itemClass="page-item" linkClass="page-link"
                        activePage={this.state.activePage}
                        itemsCountPerPage={28}
                        totalItemsCount={this.props.totalItem}
                        onChange={this.handlePageChange.bind(this)}
                    />
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.dispatch(createAction(FETCH_COURSEDETAIL, data.course));
        this.props.dispatch(createAction(TOTAL_ITEM, data.course));
    }
}

const mapStateToProp = (state) => ({
    course: state.CourseReducer.course,
    totalItem: state.CourseReducer.totalItem,
    kind: state.CourseReducer.kind
})

export default connect(mapStateToProp)(CourseList);