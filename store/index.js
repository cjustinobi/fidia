export const state = () => ({
  isDrawer: false,
})

export const mutations = {
  TOGGLE_DRAWER (state) {
    state.isDrawer = !state.isDrawer
  }
}


export const getters = {
  isDrawer: state => state.isDrawer
}
