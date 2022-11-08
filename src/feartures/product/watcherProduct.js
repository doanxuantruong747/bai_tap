import { put, select, takeLeading } from "redux-saga/effects"
import * as Actions from "./constant"


function* workerProduct(action) {
    try {
        yield select(state => state.products)
    } catch (error) {
        console.log(error);
    }
}

function* workerAddNewProduct(action) {
    try {
        yield put({
            type: Actions.ADD_NEW_PRODUCT,
            data: action.data
        })
    } catch (error) {
        console.log(error);
    }
}


export function* watcherProduct() {
    yield takeLeading(Actions.GET_LIST_PRODUCT, workerProduct)
    yield takeLeading(Actions.ADD_NEW_PRODUCT, workerAddNewProduct)
}

