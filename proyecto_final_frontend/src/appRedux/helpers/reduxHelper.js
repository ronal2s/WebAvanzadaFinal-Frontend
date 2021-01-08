import { helperTypes } from './helperTypes'

/**
 * Create all types app
 * @param typeString
 * @return {any}
 */
export const createTypes = typeString => {
  return Object.values(helperTypes).reduce((accumulator, currentValue) => {
    accumulator[currentValue] = `${typeString}_${currentValue}`;
    return accumulator
  }, {});
};

/**
 * Action creator for
 * @param type
 * @param payload
 * @return {{type: *}}
 */
export const createAction = (type, payload = {}) => ({ type, ...payload });

/**
 * create object to use with pagination in select
 * @return {{paginationMore: boolean, currentPage: number}}
 */
export const createPaginationSelectObject = () => {
  return {
    paginationMore: true,
    currentPage: 1
  }
};

/**
 * Impure function that returns another function with state and action or returns the initial state
 * @param initialState
 * @param handlers
 * @return {function(*=, *=): *}
 */
export const createReducer = (initialState, handlers) =>
  (state = initialState, action) =>
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;
