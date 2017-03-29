import * as types from '../mutations';


// initial state
const state = {
  products: []
}

// getters
const getters = {
  allProducts: state => state.products
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.products = products
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}