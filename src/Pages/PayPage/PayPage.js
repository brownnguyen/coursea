import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PayPage.scss';
class PayPage extends Component {

    renderCartPay = () => {
        return this.props.cart.map((item, index) => {
            return (
                <label key={index} className="label-content">
                    <div>
                        {item.courseName}
                    </div>
                    <input type="checkbox" id={item.id} onChange={this.handleChange} />
                    <span className="checkmark"></span>
                </label>
            )
        })
    }
    handleChange = (e) => {
        console.log(e.target.id)
        console.log(e.target.checked)
    }
    render() {
        return (
            <div className="paypage">
                <div className="container">
                    {this.renderCartPay()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cart: state.CartReducer.cart
})
export default connect(mapStateToProps, null)(PayPage);
