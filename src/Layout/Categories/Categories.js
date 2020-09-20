import React, { Component } from 'react';
import data from '../../JSON/database.json';
import './Categories.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createAction } from '../../Redux/Action/createAction';
import { KIND } from '../../Redux/Action/Type';
class Categories extends Component {
    getKind = (id) => {
        this.props.dispatch(createAction(KIND, id))
    }
    renderCategories = () => {
        return data.categories.map((item, index) => {
            return (
                <Link to={`/course/${item.id}`} onClick={() => this.getKind(item.id)} id={item.id}
                    className="categories__content" key={index}>
                    <div className="card-categories">
                        <div className="card__img">
                            <img className="card-imgTop" src={item.image} width={270} height={312} alt={item.title} />
                        </div>
                        <div className="card-body-categories">
                            <h4 className="card-title-categories">{item.title}</h4>
                        </div>
                    </div>
                </Link>
            )
        }).slice(1, 9)
    }
    render() {
        return (
            <div className="categories">
                <h3 className="title-categories">Top categories</h3>
                <div className="container">
                    <div className="categories-content">
                        {this.renderCategories()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    kind: state.CourseReducer.kind
})
export default connect(mapStateToProps)(Categories);