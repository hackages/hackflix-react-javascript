export function setLocalStorage(key, storage) {
  return localStorage.setItem(key, storage);
}

export function getLocalStorage(key) {
  console.log(localStorage.getItem(key));
  return localStorage.getItem(key);
}
