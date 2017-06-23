import Vue from 'vue'
import Vuex from 'vuex'
import MessageBox from './modules/messageBox'
import Counter from './modules/counter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    MessageBox,
    Counter
  }
})

export default store
