//action
const ADD_BUY_NOW = "buy/addCartData"


//action creator

export function addCartDataInBuyNow(cartData){
    return {type:ADD_BUY_NOW , payload :cartData}
}

//reducer

export default function buyReducer(state=[],action){
    switch(action.type){
        case ADD_BUY_NOW:
            return [...state,action.payload];
        default : 
            return [...state]    
    }
}