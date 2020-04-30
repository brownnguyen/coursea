import React, { Component } from 'react';
import data from '../../JSON/database.json';
import './Categories.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createAction } from '../../Action/createAction';
import { KIND } from '../../Action/Type';
class Categories extends Component {
    getKind = (id) => {
        this.props.dispatch(createAction(KIND,id))
    }
    renderCategories = () => {
        return data.categories.map((item, index) => {
            return (
                <Link to={`/course/${item.id}`} exact href="google.com" onClick={()=> this.getKind(item.id)} id={item.id}
                 className="col-3 categories__content" key={index}>
                    <div className="card">
                        <div className="card__img">
                        <img className="card-img-top" src={item.image} width={270} height={312} alt={item.title} />
                        <div className="card__categories"></div>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{item.title}</h4>
                        </div>
                    </div>
                </Link>
            )
        }).slice(1,9)
    }
    render() {
        return (
            <div className="container categories">
                <h3>Top categories</h3>
                <div className="row">
                    {this.renderCategories()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    kind: state.CourseReducer.kind
})
export default connect(mapStateToProps)(Categories);