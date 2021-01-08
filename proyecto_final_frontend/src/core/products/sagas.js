import React from 'react';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getProducts } from './service';
import { actions } from '../../appRedux/helpers/actionCreator';
function* fetchProducts(action) {
  try {
    const response = yield call(getProducts);
    yield put(actions.success(types.FETCH_PRODUCTS.SUCCESS, { products: response.data }, false))

  } catch (error) {
    console.log(error);
  }
}


export default function* sagaRoute() {
  yield all([
    takeLatest(types.FETCH_PRODUCTS.WATCHER, fetchProducts)
  ])
}
