import React, { Component } from 'react';
import { connect } from 'react-redux';
import { responseFromApi, failedToFetchApiResponse, addProductToCart } from '../Actions/cartActions'

class HomePage extends Component{

    fetchProducts(){
        fetch('https://shopping-cart-demo-api.herokuapp.com/products')
        .then(resp => resp.json())
        .then(data => this.props.responseFromApi(data))
        .catch(error => this.props.failedToFetchApiResponse(error))
    }

    componentDidMount(){
        this.fetchProducts();
    }

    handleClick = id => {
        this.props.addProductToCart(id);
    }

    render(){
        const { items, isLoading, error } = this.props;
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {error ? <h5 className="center">{error.message}</h5> : null}
                    {!isLoading ? (
                        items.map(item => {                            
                            return(                           
                                <div className="card" key={item.partId}>
                                    <div className="card-image">
                                        <img src={item.image2} alt={item.title}/>
                                        <span className="card-title">{item.title}</span>
                                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => this.handleClick(item.partId)}>
                                            <i className="material-icons">add</i>
                                        </span>
                                    </div>
    
                                    <div className="card-content">
                                        <p>{item.description}</p>
                                        <p><b>Price: {item.priceValue}$</b></p>
                                    </div>
                                </div>         
                            );
                        })
                    ) : (
                        <div className="loading-indicator">
                            <div className="preloader-wrapper big active">
                                <div className="spinner-layer spinner-blue-only">
                                    <div className="circle-clipper left">
                                        <div className="circle"></div>
                                    </div><div className="gap-patch">
                                        <div className="circle"></div>
                                    </div><div className="circle-clipper right">
                                        <div className="circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        isLoading: state.isLoading,
        error: state.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        responseFromApi: data => dispatch(responseFromApi(data)),
        failedToFetchApiResponse: error => dispatch(failedToFetchApiResponse(error)),
        addProductToCart: id => dispatch(addProductToCart(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);