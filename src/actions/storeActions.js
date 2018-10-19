import axios from 'axios';

export const FETCH_STORES_START = 'FETCH_STORES_START';
export const FETCH_STORES_SUCCESSFUL = 'FETCH_STORES_SUCCESSFUL';
export const FETCH_STORES_FAILED = 'FETCH_STORES_FAILED';

export function fetchStart() {
  return {
    type: FETCH_STORES_START,
  };
}

export function fetchSuccessful(data) {
  return {
    type: FETCH_STORES_SUCCESSFUL,
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
    return axios.get('https://plausible-nitrogen.glitch.me/addresses')
      .then((response) => {
        if (response.data !== null && response.data !== undefined) {
          return fetchSuccessful(response.data);
        }
        return fetchFailed(response.status);
      });
  };
}
