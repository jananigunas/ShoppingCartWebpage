import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        const { cartQuantity } = this.props;
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    <ul className="right">
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/cart">{`Cart (${cartQuantity})`}</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartQuantity: state.cartQuantity,
    }
}

export default connect(mapStateToProps)(Header);
