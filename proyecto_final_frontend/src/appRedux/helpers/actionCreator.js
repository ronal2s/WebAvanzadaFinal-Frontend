/**
 * This method intercepts all actions of the application,
 * allowing to include any logic before being dispatched to the reducers.
 * @type {{pending: function(*=): {type: *}, success: function(*=, *): {type: *}, error: function(*=, *): {type: *}}}
 */
import { createAction } from './reduxHelper';

export const actions = {
  processing: (type, notify = true) => {
    // Any logic here before being dispatched to the reducers
    return createAction(type, { processing: notify, notify });
  },
  success: (type, payload, notify = true) => {
    // Any logic here before being dispatched to the reducers
    return createAction(type, { payload, notify });
  },
  error: (type, payload, notify = true) => {
    return createAction(type, { payload, notify });
    // Any logic here before being dispatched to the reducers
  }
};
