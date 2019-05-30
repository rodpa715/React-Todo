
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
    localStorage.removeItem(savedKey)
  },
}
export default localStorageHelper
