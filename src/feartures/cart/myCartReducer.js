import * as Actions from "./actionsMyCart";

const initialSate = {
    myCart: {
        listProducts: [

        ],
        sum: null,
        tax: null,
        totalBeforeTax: null,
        sumQuantity: null
    }
}
const myCartReducer = (state = initialSate, action) => {

    switch (action.type) {
        case Actions.MY_CART: {
            return state;
        }
        case Actions.ADD_ITEM_TO_CART: {
            const { data = {} } = action;
            const { newMyCart } = data;
            return {
                ...state,
                myCart: newMyCart
            }
        }
        default:
            return state;
    }
}

export default myCartReducer; 