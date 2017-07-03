import api from '../../../api/api'
import * as types from '../../mutation-types'

// initial state
const state = {
  index:{}
}

// getters
const getters = {
  index: state => state.index,
}

const actions = {
  [types.HOMEPAGE_INDEX_ACTION] ({ commit ,state}, queryCondition={}) {
    return new Promise((resolve, reject) => {
      commit(types.HOMEPAGE_INDEX_REQUEST);
      api.get(
        `hxwwz/rest/json/info/getIndex`,
        (payload) => commit(types.HOMEPAGE_INDEX_SUCCESS, payload),
        (payload) => commit(types.HOMEPAGE_INDEX_FAILURE, payload),
        resolve,
        reject
      )
    })   
  }

}

// mutations
const mutations = {
  [types.HOMEPAGE_INDEX_REQUEST] (state) {
    state.index = {
      ...state.index,
      loading: true,
      status: 0
    }
    
  },

  [types.HOMEPAGE_INDEX_SUCCESS] (state, payload) {
   
    // console.log(payload);
    // let strategy = {
    //   keyword:"strategy",
    //   datas:[]
    // }
    // if (payload.results.length > 0) {
    //   payload.results = payload.results.map((item) => {
    //     if (item.keyword == "short" || item.keyword == "plan") {
    //       strategy.datas.push(item)
    //       return {}
    //     } else {
    //       return item
    //     }
    //   });
    // }
    // payload.results.push(strategy)
    state.index = {
      ...state.index,
      ...payload,
      loading: false,
      status: 0
    }
  },

  [types.HOMEPAGE_INDEX_FAILURE] (state, payload) {
    state.index = {
      ...state.index,
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
