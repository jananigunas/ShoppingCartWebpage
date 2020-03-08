import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ACTIONS } from '../Actions/cartActions';

class ShippingAndCheckout extends Component{

    handleChecked = event => {
        if(event.target.checked) {
            this.props.addShippingCharges();
        }
        else {
            this.props.removeShippingCharges();
        }
    }
    
    render(){
        const { cartValue } = this.props;
        return (
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                        </label>
                    </li>
                    <li className="collection-item"><b>Total: {cartValue} $</b></li>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn">Checkout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartValue: state.cartValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addShippingCharges: () => dispatch({type: ACTIONS.ADD_SHIPPING_CHARGES}),
        removeShippingCharges: () => dispatch({type: ACTIONS.REMOVE_SHIPPING_CHARGES}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShippingAndCheckout);