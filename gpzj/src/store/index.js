import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
// import hot from './modules/hot'
import newstock from './modules/newstock/index'
Vue.use(Vuex)



export default new Vuex.Store({
  modules: {
    newstock
  },
  plugins: [createLogger()]
})