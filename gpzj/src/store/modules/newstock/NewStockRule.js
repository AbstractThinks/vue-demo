import api from '../../../api/api'
import * as types from '../../mutation-types'

// initial state
const state = {
  stockrule:{}
}

// getters
const getters = {
  stockrule: state => state.stockrule,
}

const actions = {
  [types.NEWSTOCK_RULE_ACTION] ({ commit ,state}, queryCondition={}) {
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
  [types.NEWSTOCK_RULE_REQUEST] (state) {
    state.stockrule = {
      ...state.stockrule,
      loading: true,
      status: 0
    }
    
  },

  [types.NEWSTOCK_RULE_SUCCESS] (state, payload) {
    state.stockrule = {
      ...state.stockrule,
      ...payload,
      loading: false,
      status: 0
    }
  },

  [types.NEWSTOCK_RULE_FAILURE] (state, payload) {
    state.stockrule = {
      ...state.stockrule,
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
