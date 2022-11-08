import { takeLatest, select, put, take } from "redux-saga/effects";

import * as Actions from "./actionsOrder";
import * as ActionsCart from "../cart/actionsMyCart";

export function* watcherOder() {
    yield takeLatest(Actions.ORDER_PAYMENT, workerOrderPayment);
    yield takeLatest(Actions.SAVE_ORDER_PROCESS, workerSaveOrderProcess);

}

function* workerOrderPayment(action) {
    try {

        const { data = {} } = action;
        const { myCart } = data;
        const { total, totalBeforeTax, sumTax } = myCart;

        const order = yield select(state => state.orderReducer.order);

        const newOrder = {
            id: null,
            name: "",
            totalBeforeTax: totalBeforeTax,
            sumTax: sumTax,
            total: total
        }

        let response = [newOrder, ...order];
        console.log(response);
        yield put({
            type: Actions.SAVE_ORDER,
            data: {
                order: response
            }
        })

        yield put({
            type: Actions.SAVE_ORDER_PROCESS
        })
        let res = yield take(Actions.SAVE_ORDER_SUCCESS);
        const { isEqual } = res.data;

        yield put({
            type: Actions.SAVE_ROW_ORDER,
            data: {
                newOder: [...myCart.listProducts]
            }
        })

        yield take(Actions.SAVE_ROW_ORDER_SUCCESS);


        if (!isEqual) {
            yield put({
                type: ActionsCart.ADD_ITEM_TO_CART,
                data: {
                    newMyCart: {
                        listProducts: [
                        ],
                        sum: 0,
                        tax: 0,
                        totalBeforeTax: 0,
                        sumQuantity: 0
                    }
                }
            })
        }

    } catch (error) { }
}

function* workerSaveOrderProcess(action) {
    try {

        const { data = {} } = action;
        const { prevOder } = data;
        const order = yield select(state => state.rowOderReducer.order);
        const isEqual = JSON.stringify(prevOder) === JSON.stringify(order);
        console.log(order);
        yield put({
            type: Actions.SAVE_ORDER_SUCCESS,
            data: {
                isEqual: isEqual
            }
        })
    } catch (error) { }
}

