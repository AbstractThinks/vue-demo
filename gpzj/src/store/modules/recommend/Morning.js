import api from '../../../api/api'
import * as types from '../../mutation-types'

// initial state
const state = {
  recommendmor:{}
}

// getters
const getters = {
  recommendmor: state => state.recommendmor,
}

const actions = {


  [types.RECOMMEND_MORNING_ACTION] ({ commit ,state}, queryCondition={}) {
    return new Promise((resolve, reject) => {
      commit(types.RECOMMEND_MORNING_REQUEST);
      api.get(
        `hxwwz/rest/json/info/getRecommendInfo?id=${queryCondition.id}&preview=${queryCondition.preview}`,
        (payload) => commit(types.RECOMMEND_MORNING_SUCCESS, payload),
        (payload) => commit(types.RECOMMEND_MORNING_FAILURE, payload),
        resolve,
        reject
      )
    })   
  }

}

// mutations
const mutations = {
  [types.RECOMMEND_MORNING_REQUEST] (state) {
    state.recommendmor = {
      ...state.recommendmor,
      loading: true,
      status: 0
    }
    
  },

  [types.RECOMMEND_MORNING_SUCCESS] (state, payload) {


    state.recommendmor = {
      ...state.recommendmor,
      ...payload,
      loading: false,
      status: 0
    }
  },

  [types.RECOMMEND_MORNING_FAILURE] (state, payload) {
    state.recommendmor = {
      ...state.recommendmor,
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
