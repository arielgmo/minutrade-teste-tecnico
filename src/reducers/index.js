import { combineReducers } from 'redux';
import storeReducer from './storeReducer';
import productReducer from './productReducer';

export default combineReducers({
  productReducer,
  storeReducer,
});
