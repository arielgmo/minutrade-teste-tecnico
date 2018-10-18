import axios from 'axios';

export const FETCH_STORES_START = 'FETCH_STORES_START';
export const FETCH_STORES_SUCESSFUL = 'FETCH_STORES_SUCESSFUL';
export const FETCH_STORES_FAILED = 'FETCH_STORES_FAILED';

export function fetchStart() {
  return {
    type: FETCH_STORES_START,
  };
}

export function fetchSucessful(data) {
  return {
    type: FETCH_STORES_SUCESSFUL,
    payload: data,
  };
}

export function fetchFailed(status) {
  return {
    type: FETCH_STORES_FAILED,
    payload: status,
  };
}

export function fetchStores() {
  return (dispatch) => {
    dispatch(fetchStart());
    const response = axios.get('https://plausible-nitrogen.glitch.me/addresses')
      .then(res => res);
    if (response.data !== null && response.data !== undefined) {
      return dispatch(fetchSucessful(response.data));
    }
    return dispatch(fetchFailed(response.status));
  };
}
