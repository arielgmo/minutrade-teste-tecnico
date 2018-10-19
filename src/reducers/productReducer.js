import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/productActions';

export default function storeReducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_PRODUCT:
      return state.filter((product) => {
        if (product.name === action.payload) {
          return false;
        }
        return true;
      });
    default:
      return state;
  }
}
