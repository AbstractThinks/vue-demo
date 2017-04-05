import api from '../../api/api'
import * as types from '../mutation-types'

// initial state
const state = {
  hotlist: {},
  hotdetail: {}
}

// getters
const getters = {
  hotlist: state => state.hotlist,
  hotdetail: state => state.hotdetail
}

const actions = {
  [types.HOTLIST_ACTION] ({ commit ,state}, queryCondition={}) {
    commit(types.HOTLIST_REQUEST);
    api.get(
      `api/resources/queryByCondition?page=${queryCondition.page}&pageSize=${queryCondition.pagesize}`,
      (payload) => commit(types.HOTLIST_SUCCESS, payload),
      (payload) => commit(types.HOTLIST_FAILURE, payload)
    )
  },
  [types.HOTDETAIL_ACTION] ({ commit ,state}, queryCondition={}) {
    commit(types.HOTDETAIL_REQUEST);
    api.get(
      `api/resources/queryByCondition?page=${queryCondition.page}&pageSize=${queryCondition.pagesize}`,
      (payload) => commit(types.HOTDETAIL_SUCCESS, payload),
      (payload) => commit(types.HOTDETAIL_FAILURE, payload)
    )
  }
}

// mutations
const mutations = {
  // list
  [types.HOTLIST_REQUEST] (state) {
    state.hotlist = {
      ...state.hotlist,
      loading: 0,
      status: 0
    }
    
  },

  [types.HOTLIST_SUCCESS] (state, payload) {
    if (state.hotlist.entries && state.hotlist.entries.length > 0) {
      payload.entries = state.hotlist.entries.concat(payload.entries)
    }
    state.hotlist = {
      ...state.hotlist,
      ...payload,
      loading: 1,
      status: 0
    }
  },

  [types.HOTLIST_FAILURE] (state, payload) {
    state.hotlist = {
      ...state.hotlist,
      loading: 1,
      status: 1,
    }
  },

  // detail
  [types.HOTDETAIL_REQUEST] (state) {
    state.hotdetail = {
      ...state.hotdetail,
      loading: 0,
      status: 0
    }
    
  },

  [types.HOTDETAIL_SUCCESS] (state, payload) {
    state.hotdetail = {
      ...state.hotdetail,
      ...payload,
      loading: 1,
      status: 0
    }
  },
  [types.HOTDETAIL_FAILURE] (state, payload) {
    state.hotdetail = {
      ...state.hotdetail,
      loading: 1,
      status: 1,
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
