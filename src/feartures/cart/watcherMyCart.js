import { takeLatest, select, put } from "redux-saga/effects";

import * as Actions from "./actionsMyCart";

export function* watcherMyCart() {
    yield takeLatest(Actions.ADD_TO_CART, workerAddToCart);

}


function* workerAddToCart(action) {
    const { data = {} } = action;
    const { product } = data;
    const { listProducts } = yield select(state => state.myCartReducer.myCart
    );

    const response = [...listProducts];

    const index = listProducts.findIndex((element) => {
        return element.id === product.id;
    });

    if (index > -1) {
        response[index].quantity += product.quantity;
    }
    if (index < 0) {
        response.unshift(product);
    }

    let newSum = 0;
    let newSumTax = 0;
    let newTotalBeforeTax = 0;
    let newQuantity = 0;

    listProducts.forEach(({ price, tax, quantity }) => {
        newSum += (price + tax) * quantity;
        newSumTax += tax * quantity;
        newTotalBeforeTax += quantity * price;
        newQuantity += quantity;
    })

    const newMyCart = {
        listProducts: response,
        sum: newSum,
        tax: newSumTax,
        totalBeforeTax: newTotalBeforeTax,
        sumQuantity: newQuantity
    }

    yield put({
        type: Actions.ADD_ITEM_TO_CART,
        data: {
            newMyCart: newMyCart
        }
    })


}
