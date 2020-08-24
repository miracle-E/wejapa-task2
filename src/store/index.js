import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    links
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})

