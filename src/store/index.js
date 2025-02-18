import {combineReducers,createStore} from 'redux'
import productReducer from './ProductsReducer'
import cartReducer,{
    addCartItem,
    decreseCartItemQuantity,
    increaseCartItemQuantity,
    increaseItemQuantity,
    emptyCart
} from './cartReducer'

import wishListReducer,{
    addWishListItem,
    removeWishListItem
} from './wishListReducer'

import buyReducer, {
    addCartDataInBuyNow
} from './buyReducer'


const reducer = combineReducers({
    products:productReducer,
    cartItems:cartReducer,
    wishList:wishListReducer,
    buyList: buyReducer
})

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__?.()
)

