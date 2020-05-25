import { Actions } from '../actions/shoppingcart.actions';
import { ActionTypes } from '../actiontypes';
import { IShoppingcart } from '../../models/ishoppingcart.model';

const initialState: Array<IShoppingcart> = []

export function ShoppingcartReducer(state = initialState, action: Actions) {

    let itemIndex
    
    switch(action.type) {
        case ActionTypes.SHOPPINGCART_ADD :
            return state = [...state, action.payload ]

        case ActionTypes.SHOPPINGCART_REMOVE :
            return state = state.filter(item => item.product._id !== action.payload)

        case ActionTypes.SHOPPINGCART_CLEAR :
          return state = initialState

        case ActionTypes.SHOPPINGCART_INCREMENT : 
            let _index = state.findIndex(p => {return p.product._id === action.payload.product._id})
            return state.map((item, index) => {
                if(index !== _index) {
                    return item
                } 
                let newItem = {product: item.product, quantity: item.quantity + 1 }
                return newItem
            })


        case ActionTypes.SHOPPINGCART_DECREMENT : 
            let _indexx = state.findIndex(p => {return p.product._id === action.payload.product._id})
            return state.map((item, index) => {
                if(index !== _indexx) {
                    return item
                } 
                let newItem = {product: item.product, quantity: item.quantity - 1 }
                return newItem
            })

        default: 
            return state
    }
}

// const getTotalQuantity = (items) => {
//     let totalQuantity = 0

//     items.forEach(product => {
//         totalQuantity += product.quantity
//     });

//     return totalQuantity
// }

// const getTotalAmount = (items) => {
//     let totalAmount = 0

//     items.forEach(product => {
//         totalAmount += product.price * product.quantity
//     });

//     return totalAmount
// }