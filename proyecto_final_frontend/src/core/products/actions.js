import React from 'react';
import { FETCH_PRODUCTS, FETCH_PRODUCT_ID } from './types';


export const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS.WATCHER
  }
}

export const fetchProductById = (id) => {
  return {
    type: FETCH_PRODUCT_ID.WATCHER,
    payload: { id: id }
  }
}
