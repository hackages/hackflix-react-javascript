export function setLocalStorage(key, storage) {
  return localStorage.setItem(key, storage);
}

export function getLocalStorage(key) {
  return localStorage.getItem(key);
}
