import api from '../../../api/api'
import * as types from '../../mutation-types'

// initial state
const state = {
  stockdetail:{}
}

// getters
const getters = {
  stockdetail: state => state.stockdetail,
}

const actions = {
  [types.NEWSTOCK_DETAIL_ACTION] ({ commit ,state}, queryCondition={}) {
    return new Promise((resolve, reject) => {
      commit(types.NEWSTOCK_DETAIL_ACTION);
      // api.get(
      //   `api/resources/queryByCondition?page=${queryCondition.page}&pageSize=${queryCondition.pagesize}`,
      //   (payload) => commit(types.HOTLIST_SUCCESS, payload),
      //   (payload) => commit(types.HOTLIST_FAILURE, payload),
      //   resolve,
      //   reject
      // )
    })
    
  },
}

// mutations
const mutations = {
  [types.NEWSTOCK_DETAIL_REQUEST] (state) {
    state.stockdetail = {
      ...state.stockdetail,
      loading: true,
      status: 0
    }
    
  },

  [types.NEWSTOCK_DETAIL_SUCCESS] (state, payload) {
    state.stockdetail = {
      ...state.stockdetail,
      ...payload,
      loading: false,
      status: 0
    }
  },

  [types.NEWSTOCK_DETAIL_FAILURE] (state, payload) {
    state.stockdetail = {
      ...state.stockdetail,
      loading: false,
      status: 1,
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
