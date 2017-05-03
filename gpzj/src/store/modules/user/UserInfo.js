import api from '../../../api/api'
import * as types from '../../mutation-types'

// initial state
const state = {
  userinfo:{}
}

// getters
const getters = {
  userinfo: state => state.userinfo,
}

const actions = {
  [types.USER_INFO_ACTION] ({ commit ,state}, queryCondition={}) {
    return new Promise((resolve, reject) => {
      commit(types.USER_INFO_REQUEST);
      api.get(
        `hxwwz/rest/json/info/getUserInfo`,
        (payload) => commit(types.USER_INFO_SUCCESS, payload),
        (payload) => commit(types.USER_INFO_FAILURE, payload),
        resolve,
        reject
      )
    })   
  }

}

// mutations
const mutations = {
  [types.USER_INFO_REQUEST] (state) {
    state.userinfo = {
      ...state.userinfo,
      loading: true,
      status: 0
    }
    
  },

  [types.USER_INFO_SUCCESS] (state, payload) {


    state.userinfo = {
      ...state.userinfo,
      ...payload,
      loading: false,
      status: 0
    }
  },

  [types.USER_INFO_FAILURE] (state, payload) {
    state.userinfo = {
      ...state.userinfo,
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
