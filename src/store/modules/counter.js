const counter = {
  state: {
    count: 0,
    loading: false
  },
  mutations: {
    INCREMENT (state) {
      state.count++
    },
    ENABLE_COUNTER_LOADING (state) {
      state.loading = true
    },
    DISABLE_COUNTER_LOADING (state) {
      state.loading = false
    },
    DECREMENT (state) {
      state.count--
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      commit('ENABLE_COUNTER_LOADING')

      setTimeout(() => {
        commit('INCREMENT')
        commit('DISABLE_COUNTER_LOADING')
      }, 1000)
    }
  }
}

export default counter
