import Vue from 'vue'
import Vuex from 'vuex'

import store from './module-example'

Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    store
  }
})

export default Store
