import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.scss';

class Cart extends Component {
    renderCart = () => {
        let { cart } = this.props;
        return cart.map((item, index) => {
            return (
                <div className="row shopCart__details mx-auto pl-2" key={index}>
                    <div className="col-4 pz-3 p-0 img__shopCart">
                        <img src={item.image} alt={item.kind} />
                    </div>
                    <div className="col-8 px-3 p-0">
                        <h5>{item.courseName}</h5>
                        <p>{item.mentor}</p>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="shopCart">
                <div className="shopCart__content">
                    {this.renderCart()}
                </div>
                <div className="shopCart__total">
                    <div className="priceItemDiv">
                        <div className="price">
                            <h6>Total $</h6>
                            <p> ${this.props.cart.reduce((price, item) => {
                                return price += item.price
                            }, 0)}</p>
                        </div>
                        <div className="item">
                            <h6>Items </h6>
                            <p className="total__item">
                                {this.props.cart.length} in Cart
                        </p>
                        </div>
                    </div>
                    <div className="goToCartDiv">
                        <Link className="btn btn-primary button__goToCart" to="/shoppingCart" >Go to Cart</Link>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cart: state.CartReducer.cart
})
export default connect(mapStateToProps)(Cart);