import React from 'react';
import ProductModel from './model';
import * as types from './types';

export const productReducers = (state = ProductModel, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS.SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        loading: false,
      }
    case types.FETCH_PRODUCT_ID:
      return {
        ...state,
        product: { ...state.product, ...action.payload.data }
      }
    default: {
      return state
    }
  }
}
