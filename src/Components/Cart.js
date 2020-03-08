import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseItemQunatity, decreaseItemQunatity, removeItemFromCart } from '../Actions/cartActions';
import ShippingAndCheckout from './ShippingAndCheckout';

class Cart extends Component{

    handleIncreaseItemQunatity = id => {
        this.props.increaseItemQunatity(id);
    }

    handleDecreaseItemQunatity = id => {
        this.props.decreaseItemQunatity(id);
    }

    handleRemoveItemFromCart = id => {
        this.props.removeItemFromCart(id);
    }
    render(){
        const { items } = this.props;
        return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {items.length ? (
                            items.map(item => {
                                return (
                                    <li className="collection-item avatar" key={item.partId}>
                                        <div className="item-img"> 
                                            <img src={item.image2} alt={item.image2} className=""/>
                                        </div>
                                
                                        <div className="item-desc">
                                            <span className="title">{item.title}</span>
                                            <p>{item.description}</p>
                                            <p><b>Price: {item.priceValue}$</b></p> 
                                            <p><b>Quantity: {item.quantity}</b></p>
                                            <div className="add-remove">
                                                <Link to="/cart"><i className="material-icons" onClick={() => this.handleIncreaseItemQunatity(item.partId)}>arrow_drop_up</i></Link>
                                                <Link to="/cart"><i className="material-icons" onClick={() => this.handleDecreaseItemQunatity(item.partId)}>arrow_drop_down</i></Link>
                                            </div>
                                            <button className="waves-effect waves-light btn pink remove" onClick={() => this.handleRemoveItemFromCart(item.partId)}>Remove</button>
                                        </div>
                                    </li>     
                                );
                            })
                        ) : (
                            <h5 className="center">Your Shopping Cart is empty.</h5>
                        )}
                    </ul>
                </div>  
                <div className="margin"><ShippingAndCheckout /></div>  
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.itemsInCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseItemQunatity: id => dispatch(increaseItemQunatity(id)),
        decreaseItemQunatity: id => dispatch(decreaseItemQunatity(id)),
        removeItemFromCart: id => dispatch(removeItemFromCart(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
