import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Cart.scss';
import { COURSE__DETAIL } from '../../Action/Type';
import { Link } from 'react-router-dom';
import { createAction } from '../../Action/createAction';

class Cart extends Component {
    renderCart = () => {
        let { cart } = this.props;
        return cart.map((item, index) => {
            return (
                <Link to={`/detailPage/${item.id}`} className="row shopCart__details mx-auto p-2" onClick={()=>this.props.getCourseDetail(item)} key={index} style={{cursor:"pointer"}}>
                    <div className="col-5 p-0 img__shopCart">
                        <img src={item.image} alt={item.kind} />
                    </div>
                    <div className="col-7 m-auto p-0">
                        <h5>{item.courseName}</h5>
                        <p>{item.mentor}</p>
                    </div>
                </Link>
            )
        })
    }
    render() {
        return (
            <div className="shopCart">
                <div className="shopCart__content">
                    {this.renderCart()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cart: state.CartReducer.cart
})
const mapDispatchToProps = dispatch => ({
    getCourseDetail : (item) => {
        dispatch(createAction(COURSE__DETAIL,item))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);