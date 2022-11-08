import * as Actions from "./actionsOrder";

const initialSate = {
    rowOrder: [
        {
            idOrder: null,
            idProduct: null,
            quantity: null,
            price: null,
            totalBeforeTax: null,
            sumTax: null
        },

    ],
}

const rowOderReducer = (state = initialSate, action) => {
    switch (action.type) {
        case Actions.SAVE_ROW_ORDER: {
            const { data = {} } = action;
            const { response } = data;
            console.log(response);
            return {
                ...state,
                order: response
            }
        }
        default:
            return state;
    }
}

export default rowOderReducer