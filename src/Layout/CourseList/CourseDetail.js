import React, { Component } from 'react';
import './CourseDetail.scss';
import { connect } from 'react-redux';
import { ADD_CART, COURSE__DETAIL } from '../../Redux/Action/Type';
import { createAction } from '../../Redux/Action/createAction';
import { Link } from 'react-router-dom';
class CourseDetail extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false
        }
    }
    handleMouseHover(bool) {
        this.setState({
            isHovering: bool,
        });
    }
    renderButton = () => {
        let { course, addCart, cart } = this.props;
        let { content, id } = this.props.course;
        let item = cart.find(item => item.id === course.id);
        if (this.state.isHovering) {
            if (item) {
                return (
                    <>
                        <Link to="/shoppingCart" className="btn goToCart">Go to cart</Link>
                        <Link to={`/detailPage/${id}`} className="btn go_details">Detail course</Link>
                    </>
                )
            } else {
                return (
                    <>
                        <button className="btn add__course" onClick={() => addCart(course)}>Add to cart</button>
                        <Link to={`/detailPage/${id}`} className="btn go_details">Detail course</Link>
                    </>
                )
            }
        }
        else {
            return <p className="content__course">{content.length > 75 ? content.substr(0, 75) + ". . ." : content}</p>
        }
    }

    render() {
        let { courseName, image, price, mentor, id } = this.props.course;
        return (
            <>
                <div onMouseEnter={() => this.handleMouseHover(true)}
                    onMouseLeave={() => this.handleMouseHover(false)}>
                    <div className="course__detail card">
                        <Link className="courseDetail" to={`/detailPage/${id}`}
                            onClick={() => this.props.addCourseDetail(this.props.course)}>
                            <i className="fa fa-bookmark"></i>
                            <span></span>
                            <div className="card__img">
                                <img className="card-img-top image" src={image} alt={courseName} />

                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{courseName.length < 35 ? courseName : courseName.substr(0, 35) + ". . ."}</h5>
                                <p className="card-text">{mentor}</p>
                                <p className="price text-right">{price} $</p>
                            </div>
                        </Link>
                        <div className="render-button-details">
                            {this.renderButton()}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCart: item => {
            const cartItem = { ...item, quantity: 1 }
            dispatch(createAction(ADD_CART, cartItem));
        },
        addCourseDetail: item => {
            dispatch(createAction(COURSE__DETAIL, item));
        }
    }
}
const mapStateToProp = (state) => ({
    cart: state.CartReducer.cart
})
export default connect(mapStateToProp, mapDispatchToProps)(CourseDetail);