import { put, select, takeEvery, takeLeading } from "redux-saga/effects"
import * as Actions from "./constant"


function* workerProduct(action) {
    try {
        yield (console.log(action))
    } catch (error) {
        console.log(error);
    }
}

// function* workerAddNewProduct(action) {
//     try {
//         yield ({
//             type: Actions.ADD_NEW_PRODUCT,
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }


export function* watcherProduct() {
    yield takeLeading(Actions.GET_LIST_PRODUCT, workerProduct)
    //yield takeLeading(Actions.ADD_NEW_PRODUCT, workerAddNewProduct)
}

