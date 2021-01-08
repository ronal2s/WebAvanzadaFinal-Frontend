import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as types from '../types/auth';
import { signIn, setAuthValuesInLocalStorage, successMessage } from '../../rayoDevCore/utils';

function* signInSaga(action) {
  const { username, password } = action.payload;
  try {
    const login = yield call(signIn, username, password);
    const auth = {
      token: login.accessToken,
      userId: login.userId
    }
    setAuthValuesInLocalStorage(auth);
    yield put({ type: types.SIGN_IN.SUCCESS, payload: { token: auth.token, userId: auth.userId } })
    successMessage('Logueado correctamente')
    console.log(login);
  } catch (err) {
    console.log(err);
  }
}

export default function* sagaRoute() {
  yield all([
    takeLatest(types.SIGN_IN.WATCHER, signInSaga)
  ])
}
