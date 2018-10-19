export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function removeProduct(name) {
  return {
    type: REMOVE_PRODUCT,
    payload: name,
  };
}
