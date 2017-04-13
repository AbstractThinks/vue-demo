import api from '../../../api/api'
import * as types from '../../mutation-types'

// initial state
const state = {
  observer: {}
}

// getters
const getters = {
	observer: state => state.observer,
}

const actions = {
	[types.NEWSTOCK_OBSERVER_ACTION] ({ commit ,state}, queryCondition={}) {

    return new Promise((resolve, reject) => {
      commit(types.NEWSTOCK_OBSERVER_REQUEST);
      api.get(
        `hxwwz/rest/json/IPO/getUserIPOState`,
        (payload) => commit(types.NEWSTOCK_OBSERVER_SUCCESS, payload),
        (payload) => commit(types.NEWSTOCK_OBSERVER_FAILURE, payload),
        resolve,
        reject
      )
    })
    
  },

  [types.NEWSTOCK_OBSERVER_ORDER_ACTION] ({ commit ,state}, queryCondition={}) {
    return new Promise((resolve, reject) => {
      commit(types.NEWSTOCK_OBSERVER_ORDER_REQUEST);
      api.get(
        `hxwwz/rest/json/IPO/order`,
        (payload) => commit(types.NEWSTOCK_OBSERVER_ORDER_SUCCESS, payload),
        (payload) => commit(types.NEWSTOCK_OBSERVER_ORDER_FAILURE, payload),
        resolve,
        reject
      )
    })
    
  },

  [types.NEWSTOCK_OBSERVER_UNORDER_ACTION] ({ commit ,state}, queryCondition={}) {
    return new Promise((resolve, reject) => {
      commit(types.NEWSTOCK_OBSERVER_UNORDER_REQUEST);
      api.get(
        `hxwwz/rest/json/IPO/unOrder`,
        (payload) => commit(types.NEWSTOCK_OBSERVER_UNORDER_SUCCESS, payload),
        (payload) => commit(types.NEWSTOCK_OBSERVER_UNORDER_FAILURE, payload),
        resolve,
        reject
      )
    })
    
  },
}

// mutations
const mutations = {
  [types.NEWSTOCK_OBSERVER_REQUEST] (state) {
    state.observer = {
      ...state.observer,
      loading: true,
      status: 0
    }
    
  },

  [types.NEWSTOCK_OBSERVER_SUCCESS] (state, payload) {

    state.observer = {
      ...state.observer,
      ...payload,
      loading: false,
      status: 0
    }
  },

  [types.NEWSTOCK_OBSERVER_FAILURE] (state, payload) {
    state.observer = {
      ...state.observer,
      loading: false,
      status: 1,
    }
  },
  [types.NEWSTOCK_OBSERVER_ORDER_REQUEST] (state) {
    state.observer = {
      ...state.observer,
      loading: true,
      status: 0
    }
    
  },

  [types.NEWSTOCK_OBSERVER_ORDER_SUCCESS] (state, payload) {
    state.observer.firstData.isordered = "1";
    state.observer.firstData.orderedcnt = parseInt(state.observer.firstData.orderedcnt) + 1;
    state.observer = {
      ...state.observer,
      loading: false,
      status: 0
    }
  },

  [types.NEWSTOCK_OBSERVER_ORDER_FAILURE] (state, payload) {
    state.observer = {
      ...state.observer,
      loading: false,
      status: 1,
    }
  },
  [types.NEWSTOCK_OBSERVER_UNORDER_REQUEST] (state) {
    state.observer = {
      ...state.observer,
      loading: true,
      status: 0
    }
    
  },

  [types.NEWSTOCK_OBSERVER_UNORDER_SUCCESS] (state, payload) {
    state.observer.firstData.isordered = "0";
    state.observer.firstData.orderedcnt = parseInt(state.observer.firstData.orderedcnt) - 1;
    state.observer = {
      ...state.observer,
      loading: false,
      status: 0
    }
  },

  [types.NEWSTOCK_OBSERVER_UNORDER_FAILURE] (state, payload) {
    state.observer = {
      ...state.observer,
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
