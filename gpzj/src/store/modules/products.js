import api from '../../api/api'
import * as types from '../mutation-types'

// initial state
const state = {
  products: []
}

// getters
const getters = {
  products: state => state.products
}

// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
// store.dispatch('increment')
const actions = {
  getAllProducts ({ commit ,state}) {
    commit(types.PRODUCT_REQUEST)
    api.getProducts(
      products,
      () => commit(types.PRODUCT_SUCCESS),
      () => commit(types.PRODUCT_FAILURE)
    )
  }
}

// mutations
const mutations = {
  [types.PRODUCT_REQUEST] (state) {
    state.products = null
  },

  [types.PRODUCT_SUCCESS] (state) {
    state.products = 'successful'
  },

  [types.PRODUCT_FAILURE] (state) {
    state.products = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
