import { SWITCH_LANGUAGE, TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH } from "constants/ActionTypes";
import { LAYOUT_TYPE, NAV_STYLE, THEME_COLOR, THEME_TYPE } from "../../constants/ThemeSetting";
import * as types from '../types/auth';


export function toggleCollapsedSideNav(navCollapsed) {
  return { type: TOGGLE_COLLAPSED_NAV, navCollapsed };
}

export function updateWindowWidth(width) {
  return (dispatch) => {
    dispatch({ type: WINDOW_WIDTH, width });
  }

}

export function setThemeType(themeType) {
  return (dispatch) => {
    dispatch({ type: THEME_TYPE, themeType });
  }
}

export function setThemeColor(themeColor) {
  return (dispatch) => {
    dispatch({ type: THEME_COLOR, themeColor });
  }
}

export function onNavStyleChange(navStyle) {
  return (dispatch) => {
    dispatch({ type: NAV_STYLE, navStyle });
  }
}

export function onLayoutTypeChange(layoutType) {
  return (dispatch) => {
    dispatch({ type: LAYOUT_TYPE, layoutType });
  }
}

export function switchLanguage(locale) {
  return (dispatch) => {
    dispatch({
      type: SWITCH_LANGUAGE,
      payload: locale
    });
  }
}

export function signIn(data) {
  return {
    type: types.SIGN_IN.WATCHER,
    payload: data
  }
}
