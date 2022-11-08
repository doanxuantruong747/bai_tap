import * as Actions from "./actionsOrder";

const initialSate = {
    order: [
        {
            // id: null,
            // name: 'User name',
            // totalBeforeTax: 'null',
            // sumTax: 'null',
            // total: 'null'
        },
    ]
}

const orderReducer = (state = initialSate, action) => {
    switch (action.type) {

        case Actions.SAVE_ORDER: {
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

export default orderReducer;