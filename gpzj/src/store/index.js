import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import newstock from './modules/newstock/index'
import user from './modules/user/index'
import recommend from './modules/recommend/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    newstock,
    user,
    recommend
  },
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})