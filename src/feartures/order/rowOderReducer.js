import * as Actions from "./actionsOrder";

const initialSate = {
    rowOrder: [
        { idProduct: 1, quantity: 1, price: null, totalBeforeTax: null, sumTax: null },
    ]
}

const rowOderReducer = (state = initialSate, action) => {
    switch (action.type) {
        case Actions.LIST_ROW_ORDER: {
            return state;
        }
        default:
            return state;
    }
}

export default rowOderReducer