import { all } from 'redux-saga/effects';
import { watcherProduct } from '../feartures/product/watcherProduct';
import { watcherMyCart } from '../feartures/cart/watcherMyCart'
import { watcherOder } from '../feartures/order/watcherOder'
import { watcherRowOder } from '../feartures/order/watcherRowOder';


function* rootWatcher() {
    yield all([
        watcherProduct(),
        watcherMyCart(),
        watcherOder(),
        watcherRowOder()
    ]);
}

export default rootWatcher;