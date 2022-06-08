export const state = () => ({

  toggleMenu: false,
  isLoading: false,

});

export const getters = {

  getToggleMenu(state) {
    return state.toggleMenu;
  },

  getIsLoading(state) {
    return state.isLoading;
  }
}

export const mutations = {

  setToggleMenu(state) {
    return state.toggleMenu = !state.toggleMenu;
  },

  setIsLoading(state) {
    return state.isLoading = !state.isLoading;
  }
}
