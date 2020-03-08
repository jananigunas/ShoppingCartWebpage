import { ACTIONS } from '../Actions/cartActions';

const initState = {
    items: [],
    itemsInCart:[],
    cartValue: 0,
    cartQuantity: 0,
    isLoading: true,
    error: null,
}
const cartReducer= (state = initState, action)=>{
    switch(action.type){
        case ACTIONS.RESPONSE_FROM_API:
            return {
                ...state,
                items: action.data,
                isLoading: false
            };
        case ACTIONS.FAILED_TO_FETCH_API_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case ACTIONS.ADD_PRODUCT_TO_CART: {
            const itemExistsInCart = state.itemsInCart.find(item => item.partId === action.id);
            if(itemExistsInCart){
                itemExistsInCart.quantity += 1;
                const itemPrice = Number((itemExistsInCart.priceValue).replace(/,/g , ""));
                return {
                    ...state,
                    cartValue: state.cartValue + itemPrice,
                    cartQuantity: state.cartQuantity + 1
                }
            }
            else{
                const itemAdded = state.items.find(item => item.partId === action.id);
                itemAdded.quantity = 1;
                const itemPrice = Number((itemAdded.priceValue).replace(/,/g , ""));
                return {
                    ...state,
                    itemsInCart: [...state.itemsInCart, itemAdded],
                    cartValue: state.cartValue + itemPrice,
                    cartQuantity: state.cartQuantity + 1
                }
            }
        }
        case ACTIONS.INCREASE_ITEM_QUNATITY: {
            const itemAdded = state.itemsInCart.find(item => item.partId === action.id);
            itemAdded.quantity += 1;
            const itemPrice = Number((itemAdded.priceValue).replace(/,/g , ""));
            return {
                ...state,
                cartValue: state.cartValue + itemPrice,
                cartQuantity: state.cartQuantity + 1
            }
        }
        case ACTIONS.DECREASE_ITEM_QUNATITY: {
            const itemAdded = state.itemsInCart.find(item => item.partId === action.id);
            if(itemAdded.quantity === 1) {
                const updatedCartItems = state.itemsInCart.filter(item => item.partId !== action.id);
                const itemPrice = Number((itemAdded.priceValue).replace(/,/g , ""));
                return {
                    ...state,
                    itemsInCart: updatedCartItems,
                    cartValue: state.cartValue - itemPrice,
                    cartQuantity: state.cartQuantity - 1
                }
            }
            else {
                itemAdded.quantity -= 1;
                const itemPrice = Number((itemAdded.priceValue).replace(/,/g , ""));
                return {
                    ...state,
                    cartValue: state.cartValue - itemPrice,
                    cartQuantity: state.cartQuantity - 1
                }
            }
        }
        case ACTIONS.REMOVE_ITEM_FROM_CART: {
            const removedItem = state.itemsInCart.find(item => item.partId === action.id);
            const updatedCartItems = state.itemsInCart.filter(item => item.partId !== action.id);
            const itemPrice = Number((removedItem.priceValue).replace(/,/g , ""));
            const newCartValue = state.cartValue - (itemPrice * removedItem.quantity); 
            return {
                ...state,
                itemsInCart: updatedCartItems,
                cartValue: newCartValue,
                cartQuantity: state.cartQuantity - removedItem.quantity
            }
        }
        case ACTIONS.ADD_SHIPPING_CHARGES: {
            return {
                ...state,
                cartValue: state.cartValue + 6
            }
        }
        case ACTIONS.REMOVE_SHIPPING_CHARGES: {
            return {
                ...state,
                cartValue: state.cartValue - 6
            }
        }
        default:
            return state;
    }
}

export default cartReducer;