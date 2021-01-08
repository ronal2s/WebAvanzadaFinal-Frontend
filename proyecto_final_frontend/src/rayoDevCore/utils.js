import { localStorageService as ls } from '../appRedux/helpers/localStorage';
import { restClientWithOutAuth } from './restClient';
import { message } from 'antd';
import { config } from './global';
import moment from 'moment';
import { history } from '../appRedux/store';

export const URL_API = config.url;

export function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
}

export const setAuthValuesInLocalStorage = (values) => {
  ls.set('AUTH_TOKEN', values);
}

export const getAuthValuesInLocalStorage = () => {
  const authToken = ls.get('AUTH_TOKEN');
  return authToken;
}

export const getTokenFromLocalStorage = () => {
  try {
    const auth = getAuthValuesInLocalStorage();
    return auth && auth.token ? auth.token : '';
  } catch (e) {
    return '';
  }
}

export const signOutFromLocalStorage = () => {
  ls.remove('AUTH_TOKEN');
  history.push('/signin');
}

export const signIn = (username, password) => {
  return restClientWithOutAuth(`${URL_API}/users/auth/signin`, 'POST', { username: username, password: password })
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export const successMessage = (messageString) => {
  message.success(messageString);
};

export const errorMessage = (messageString) => {
  message.error(messageString);
};
