import * as Actions from "./actionsOrder";

const initialSate = {
    order: [
        { id: 1, name: null, totalBeforeTax: null, sumTax: null, total: null },
    ]
}

const orderReducer = (state = initialSate, action) => {
    switch (action.type) {

        case Actions.SAVE_ORDER: {
            const { data = {} } = action;
            const { response } = data;

            return {
                ...state,
                order: response
            }
        }

        default:
            return state;
    }
}

export default orderReducer;