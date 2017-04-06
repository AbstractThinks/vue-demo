import api from '../../../api/api'
import * as types from '../../mutation-types'

// initial state
const state = {
  stocklist: {}
}

// getters
const getters = {
   stocklist: state => state.stocklist,
}

const actions = {
  [types.NEWSTOCK_LIST_ACTION] ({ commit ,state}, queryCondition={}) {
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
  [types.NEWSTOCK_LIST_REQUEST] (state) {
    state.stocklist = {
      ...state.stocklist,
      loading: true,
      status: 0
    }
    
  },

  [types.NEWSTOCK_LIST_SUCCESS] (state, payload) {
    state.stocklist = {
      ...state.stocklist,
      ...payload,
      loading: false,
      status: 0
    }
  },

  [types.NEWSTOCK_LIST_FAILURE] (state, payload) {
    state.stocklist = {
      ...state.stocklist,
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
