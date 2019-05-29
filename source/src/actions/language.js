export const SWITCH_LANGUAGE = Symbol("SWITCH_LANGUAGE");
export function switchLanguage() {
  return {
    type: SWITCH_LANGUAGE
  };
}
