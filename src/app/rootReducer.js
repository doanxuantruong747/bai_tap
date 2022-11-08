import { combineReducers } from 'redux';
import productReducer from '../feartures/product/productReducer';
import myCartReducer from '../feartures/cart/myCartReducer';
import orderReducer from '../feartures/order/orderReducer';
import rowOderReducer from '../feartures/order/rowOderReducer';


const rootReducer = combineReducers({
    productReducer,
    myCartReducer,
    orderReducer,
    rowOderReducer
});
export default rootReducer;