import {combineReducers} from 'redux';
import { products} from './products';
import { cartReducer} from './cartReducer';

const rootReducer = combineReducers({products , cartReducer });
export default rootReducer; 