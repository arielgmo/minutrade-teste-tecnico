import { FETCH_STORES_SUCCESSFUL } from '../actions/storeActions';

export default function storeReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_STORES_SUCCESSFUL:
      return action.payload;
    default:
      return state;
  }
}
