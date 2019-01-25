const setLocalstorage = (obj) => {
  localStorage.setItem('items', JSON.stringify(obj))
}

export default setLocalstorage;
