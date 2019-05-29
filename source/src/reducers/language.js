import * as ActionType from "../actions/language";
import { fromJS } from "immutable";
import { LANGUAGES } from "../config/enum";
import Storage from "../lib/storage";

const lang = Storage.get("lang");

const defaultState = {
  lang: lang ? lang : LANGUAGES.cn
};

const initialState = fromJS(defaultState);

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ActionType.SWITCH_LANGUAGE:
      const nextLang =
        state.get("lang") === LANGUAGES.en ? LANGUAGES.cn : LANGUAGES.en;
      Storage.set("lang", nextLang);
      return state.set("lang", nextLang);
    default:
      return state;
  }
}
