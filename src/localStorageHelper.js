
const localStorageHelper = {
  getInitialObject: function(savedKey, initalArray){
    if(localStorage.getItem(savedKey) != null){
      return JSON.parse(localStorage.getItem(savedKey))
    }else{
      return initalArray
    }
  },

  updateLocalStorage: function (savedKey, state) {
    localStorage.setItem(savedKey, JSON.stringify(state));
  },
  clearLocalStorage: function(savedKey){
    localStorage.clear(savedKey)
  },
}
export default localStorageHelper
