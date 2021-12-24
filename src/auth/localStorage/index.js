export const setStorage = (nameStorage, data) =>
  localStorage.setItem(nameStorage, JSON.stringify(data));

export const getStorage = (nameStorage) =>
  JSON.parse(localStorage.getItem(nameStorage));
