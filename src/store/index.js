import Vue from 'vue'
import Vuex from 'vuex'

import ld from './module-example'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ld
  }
})

export default store
