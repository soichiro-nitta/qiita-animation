export const state = () => ({
  entered: false
})

export const getters = {
  entered: state => state.entered
}

export const mutations = {
  click (state) {
    state.entered = !state.entered
  }
}

