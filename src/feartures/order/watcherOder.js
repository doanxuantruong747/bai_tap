import { takeLatest, select, put, take, takeEvery } from "redux-saga/effects";

import * as Actions from "./actionsOrder";
import * as ActionsCart from "../cart/actionsMyCart";

export function* watcherOder() {
    yield takeLatest(Actions.ORDER_PAYMENT, workerOrderPayment);

}


function* workerOrderPayment(action) {

    try {
        let newSumBeforeTax = 0;
        let newSumTax = 0;
        let newTotal = 0;

        const order = yield select(state => state.orderReducer.order);
        const myCart = yield select(state => state.myCartReducer.myCart);

        myCart.listProducts.forEach((product) => {
            newSumBeforeTax += product.price;
            newSumTax += (product.tax * product.quantity);
            newTotal = (newSumBeforeTax + newSumTax)
        });

        let _id = Math.floor(Math.random() * 1000);
        const newOrder = {
            id: _id,
            name: `userName` + _id,
            totalBeforeTax: newSumBeforeTax,
            sumTax: newSumTax,
            total: newTotal
        }

        let response = [newOrder, ...order];

        yield put({
            type: Actions.SAVE_ORDER,
            data: {
                response: response
            }
        })

        // handle row order


        // delele item my in my cart
        let newMyCart = {
            listProducts: [
            ],
            sum: null,
            tax: null,
            totalBeforeTax: null,
            sumQuantity: null
        }
        yield put({
            type: ActionsCart.ADD_ITEM_TO_CART,
            data: {
                newMyCart: newMyCart
            }
        })



    } catch (error) { }
}


