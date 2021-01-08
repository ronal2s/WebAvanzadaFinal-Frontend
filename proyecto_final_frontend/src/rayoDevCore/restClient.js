import axios from 'axios';
import { history } from '../appRedux/store'
import { getTokenFromLocalStorage, signOutFromLocalStorage } from './utils';

export const restClient = (route, method, data = null) => {
  return axios(
    {
      url: route,
      method: method,
      data: data,
      headers: {
        'Authorization': `Bearer ${getTokenFromLocalStorage()}`
      },
      json: true,
    }
  ).then((response) => {
    return Promise.resolve(response.data);
  }).catch((error) => {
    if (error.response) {
      if (error.response.status === 401) {
        signOutFromLocalStorage();
        const location = {
          pathname: '/signin',
          state: {
            isAuthentication: false,
            from: { pathname: window.location.pathname, search: "", hash: "", state: undefined }
          }

        };
        history.push(location);
      }
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject(getUnknownError());
    } else {
      return Promise.reject(getUnknownError());
    }
  })
}

export const restClientWithOutAuth = (route, method, data = null) => {
  return axios(
    {
      url: route,
      method: method,
      data: data,
      json: true
    }
  ).then((response) => {
    return Promise.resolve(response.data);
  }).catch((error) => {
    if (error.response) {
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject(getUnknownError());
    } else {
      return Promise.reject(getUnknownError());
    }
  });
}

const getUnknownError = () => {
  return {
    hasError: true,
    data: null,
    code: 500,
    message: "Ha ocurrido un error contacte con el soporte"
  }
};
