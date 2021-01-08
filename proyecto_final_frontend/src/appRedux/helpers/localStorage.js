import ls from 'local-storage';

export const localStorageService = {
  set: function (key, value) {
    try {
      ls.set(key, value);
    } catch (e) {
      console.log(e)
    }
  },
  get: function (key) {
    try {
      return ls.get(key);
    } catch (e) {
      console.log(e)
    }
  },
  remove: function (key) {
    try {
      ls.remove(key);
    } catch (e) {
      console.log(e)
    }
  },
  clear: function () {
    try {
      ls.clear();
    } catch (e) {
      console.log(e)
    }
  },
  listenerOn: function (key, fn) {
    try {
      ls.on(key, fn);
    } catch (e) {
      console.log(e)
    }
  },
  listenerOff: function (key, fn) {
    try {
      ls.off(key, fn);
    } catch (e) {
      console.log(e)
    }
  },
};
