import { takeLeading, select, put } from "redux-saga/effects";

import * as Actions from "./actionsOrder";

export function* watcherRowOder() {
    yield takeLeading(Actions.SAVE_ROW_ORDER_PROCESS, workerSaverOrderProcess);
    yield takeLeading(Actions.SAVE_ROW_ORDER, workerSaveRowOder)
}

function* workerSaverOrderProcess(action) {
    try {
        yield
        console.log('test');
    } catch (error) { }
}

function* workerSaveRowOder(action) {
    try {

        const { rowOrder } = yield select(state => state.rowOrderReduct);
        console.log(rowOrder);

    } catch (error) { }
}