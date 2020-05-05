import React, { Component } from 'react';
import './CourseList.scss';
import data from '../../JSON/course.json';
import database from '../../JSON/database.json';
import CourseDetail from './CourseDetail';
import { connect } from 'react-redux';
import { KIND, ACTIVE_PAGE } from '../../Action/Type.js';
import { createAction } from '../../Action/createAction.js';
import Pagination from 'react-js-pagination';
import { Link } from 'react-router-dom';
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
            return data.course.map((item, index) => {
                return (
                        <div className="col-lg-3 col-md-4 col-sm-6 itemCourse" key={index}>
                            <CourseDetail course={item} />
                        </div>
                )
            }).slice(start, end);
        }
        else {
            let newarray = course.filter(item => item.kind === kind);
            return newarray.map((item, index) => {
                return (
                    <div className="col-lg-3 col-md-4 col-sm-6 itemCourse" key={index}>
                        <CourseDetail course={item} />
                    </div>
                )
            }).slice(start, end);
        }
    }
    renderTitleCategoriesDiv = () => {
        return database.categories.map((item, index) => {
            return (
                <div className="medium__course" key={index}>
                    <Link className="mediumScreenCourse" id={item.id} to={`/course/${item.id}`} onClick={() => this.getKind(`${item.id}`)} key={index}>{item.title}</Link>
                </div>
            )
        })
    }
    renderTitleCategories = () => {
        return database.categories.map((item, index) => {
            return (
                <Link className="course__categories" id={item.id} to={`/course/${item.id}`} onClick={() => this.getKind(`${item.id}`)} key={index}>{item.title}</Link>
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
                        <h2 className="title__categories">All categories</h2>
                    </div>
                    <div className="list__course">
                        <div className="course__categories__screen row">
                            {this.renderTitleCategories().slice(1, 9)}
                        </div>
                        <div className="row mediumCategories">
                            <div className="medium__content__categories">
                                {this.renderTitleCategoriesDiv().slice(1, 9)}
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {this.renderCategories()}
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