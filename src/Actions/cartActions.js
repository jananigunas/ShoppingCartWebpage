export const ACTIONS = {
    RESPONSE_FROM_API: 'RESPONSE_FROM_API',
    FAILED_TO_FETCH_API_RESPONSE: 'FAILED_TO_FETCH_API_RESPONSE',
    ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
    INCREASE_ITEM_QUNATITY: 'INCREASE_ITEM_QUNATITY',
    DECREASE_ITEM_QUNATITY: 'DECREASE_ITEM_QUNATITY',
    REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
    ADD_SHIPPING_CHARGES: 'ADD_SHIPPING_CHARGES',
    REMOVE_SHIPPING_CHARGES: 'REMOVE_SHIPPING_CHARGES',
};
    
export const responseFromApi = data => {
    return {type: ACTIONS.RESPONSE_FROM_API, data};
}

export const failedToFetchApiResponse = error => {
    return {type: ACTIONS.FAILED_TO_FETCH_API_RESPONSE, error};
}

export const addProductToCart = id => {
    return {type: ACTIONS.ADD_PRODUCT_TO_CART, id};
}

export const increaseItemQunatity = id => {
    return {type: ACTIONS.INCREASE_ITEM_QUNATITY, id};
}

export const decreaseItemQunatity = id => {
    return {type: ACTIONS.DECREASE_ITEM_QUNATITY, id};
}

export const removeItemFromCart = id => {
    return {type: ACTIONS.REMOVE_ITEM_FROM_CART, id};
}
