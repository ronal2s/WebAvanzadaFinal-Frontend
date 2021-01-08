import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import createRootReducer from '../reducers'
import rootSaga from '../sagas';

const createBrowserHistory = require('history').createBrowserHistory;
const sagaMiddleware = createSagaMiddleware({});

export const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);

const middlewares = [sagaMiddleware, routeMiddleware, thunk];

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export default function configureStore(preloadedState) {
  const store = createStore(createRootReducer(history), preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  return store;
}
