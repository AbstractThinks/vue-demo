import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import hot from './modules/hot'

Vue.use(Vuex)



export default new Vuex.Store({
  modules: {
    hot
  },
  plugins: [createLogger()]
})