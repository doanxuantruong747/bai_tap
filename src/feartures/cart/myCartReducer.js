import * as Actions from "./actionsMyCart";

const initialSate = {
    myCart: {
        listProducts: [
            {
                id: 1,
                name: "OMO-MATIC",
                image: "https://meta.vn/Data/image/2021/12/22/nuoc-giat-omo-matic-cho-may-giat-cua-tren-2-2kg.jpg",
                price: 175000,
                tax: null,
                quantity: 1
            },
            {
                id: 2,
                name: "Sữa Tắm Cottage",
                image: "https://cdn.cocolux.com/2021/10/images/products/1634871256626-sua-tam-cottage.png",
                price: 165000,
                tax: null,
                quantity: 1
            },
        ],
        sum: 340000,
        tax: null,
        totalBeforeTax: 340000,
        sumQuantity: 2
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
            console.log(newMyCart);
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