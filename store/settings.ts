export const state = () => ({

  toggleMenu: false
});

export const getters = {

  getToggleMenu(state) {
    return state.toggleMenu;
  }
}

export const mutations = {

  setToggleMenu(state) {
    return state.toggleMenu = !state.toggleMenu;
  }
}
