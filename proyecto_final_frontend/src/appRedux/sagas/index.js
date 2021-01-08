import { all } from 'redux-saga/effects';
import productSaga from '../../core/products/sagas';
import AuthSaga from '../sagas/auth';

export default function* rootSaga(getState) {
  yield all([
    productSaga(),
    AuthSaga()
  ]);
}
