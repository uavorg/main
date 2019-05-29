function set(name, value) {
  window.localStorage.setItem(name, value);
}

function get(name) {
  return window.localStorage.getItem(name);
}

const Storage = { set, get };
export default Storage;
