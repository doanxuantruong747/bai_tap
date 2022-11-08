import { delay, takeEvery, takeLatest, takeLeading, select, put, take, all, fork, spawn, call } from "redux-saga/effects";

import * as Actions from "./actionsOrder";

export function* watcherRowOder() {
    yield takeLeading(Actions.SAVE_ROW_ORDER_PROCESS, workerSaverOrderProcess);
    yield takeLeading(Actions.SAVE_ROW_ORDER, workerSaveRowOder)
}

function* workerSaverOrderProcess(action) {
    try {
        console.log("in worker save dong don hang process");
        yield put({
            type: Actions.SAVE_ROW_ORDER_SUCCESS
        })
    } catch (error) { }
}

function* workerSaveRowOder(action) {
    try {
        const { data = {} } = action;
        const { newRowOrder } = data;
        const { rowOrder } = yield select(state => state.rowOrderReduct);

    } catch (error) { }
}