import React, { Component } from 'react';
import './CourseList.scss';
import database from '../../JSON/database.json';
import CourseDetail from './CourseDetail';
import { connect } from 'react-redux';
import { KIND, ACTIVE_PAGE } from '../../Redux/Action/Type.js';
import { createAction } from '../../Redux/Action/createAction.js';
import Pagination from 'react-js-pagination';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
class CourseList extends Component {
    getKind = (e) => {
        let value = e
        this.props.dispatch(createAction(KIND, value))
    }
    renderCategories = () => {
        let { course, kind, activePage } = this.props;
        let start = (activePage - 1) * 20;
        let end = (activePage - 1) * 20 + 20;
        if (kind === "all") {
            return course.map((item, index) => {
                return (
                    <CourseDetail course={item} key={index} />
                )
            }).slice(start, end);
        }
        else {
            let newarray = course.filter(item => item.kind.toLowerCase() === kind);

            return newarray.map((item, index) => {
                return (
                    <CourseDetail course={item} key={index} />
                )
            }).slice(start, end);
        }
    }
    renderTitleCategories = () => {
        return database.categories.map((item, index) => {
            return (
                <Link
                    className={item.id === this.props.kind ? "course__categories btn-course active" : "course__categories btn-course"}
                    id={item.id}
                    to={`/course/${item.id}`}
                    onClick={() => this.getKind(`${item.id}`)}
                    key={index}>{item.title}</Link>
            )
        })
    }
    handlePageChange(pageNumber) {
        this.props.dispatch(createAction(ACTIVE_PAGE, pageNumber))
    }
    changeKind = (e) => {
        let value = e.target.id
        this.props.dispatch(createAction(KIND, value));
    }
    render() {
        return (
            <div className="courseList">
                <div className="top">
                    <Particles style={{ position: "absolute", zIndex: 1 }}
                        height={350}
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
                    <div className="layer"></div>
                    <div className="content">
                        <h3>Cour<span>sea</span></h3>
                        <p>Academy</p>
                    </div>
                </div>
                <div className="courseDetail">
                    <div className="title">
                        <h2 className="title__categories">Categories</h2>
                    </div>
                    <div className="list__course">
                        <div className="container">
                            <div className="course__categories__screen">
                                {this.renderTitleCategories()}
                            </div>
                            <div className="course-content">
                                {this.renderCategories()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination__course">
                    <Pagination itemClass="page-item" linkClass="page-link"
                        activePage={this.props.activePage}
                        itemsCountPerPage={20}
                        totalItemsCount={this.props.totalItem}
                        onChange={this.handlePageChange.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProp = (state) => ({
    course: state.CourseReducer.course,
    totalItem: state.CourseReducer.totalItem,
    kind: state.CourseReducer.kind,
    activePage: state.CourseReducer.activePage
})

export default connect(mapStateToProp)(CourseList);