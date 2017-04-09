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
      commit(types.NEWSTOCK_LIST_ACTION);
      api.get(
        `api/resources/queryByCondition?page=${queryCondition.page}&pageSize=${queryCondition.pagesize}`,
        (payload) => commit(types.NEWSTOCK_LIST_SUCCESS, payload),
        (payload) => commit(types.NEWSTOCK_LIST_FAILURE, payload),
        resolve,
        reject
      )
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
    payload = {"message":"查询成功","rscode":"0","results":[{"id":"14","issue_price":"9.41","online_issue_date":"2017-04-17 00:00:00","subscribe_limit":"","code":"300640","short_name":"德艺文创","stock_exchange":"sz"},{"id":"17","issue_price":"9.94","online_issue_date":"2017-04-14 00:00:00","subscribe_limit":"","code":"300604","short_name":"长川科技","stock_exchange":"sz"},{"id":"1","issue_price":"","online_issue_date":"2017-04-12 00:00:00","subscribe_limit":"","code":"002863","short_name":"飞凯达","stock_exchange":"sh"},{"id":"13","issue_price":"","online_issue_date":"2017-04-11 00:00:00","subscribe_limit":"","code":"300642","short_name":"丹股份","stock_exchange":"sh"},{"id":"12","issue_price":"","online_issue_date":"2017-04-09 00:00:00","subscribe_limit":"","code":"300641","short_name":"正股份","stock_exchange":"sh"},{"id":"11","issue_price":"","online_issue_date":"2017-04-08 00:00:00","subscribe_limit":"","code":"000001","short_name":"今凯达","stock_exchange":"sz"}],"error":false,"page":{"pageSizeSetted":true,"nextPage":1,"orderBy":null,"pageSize":20,"firstSetted":true,"prePage":1,"hasPre":false,"asc":true,"totalCount":6,"pageNo":1,"hasNext":false,"orderBySetted":false,"autoCount":false,"first":0,"totalPages":1},"rslevel":"0","firstData":{"id":"14","issue_price":"9.41","online_issue_date":"2017-04-17 00:00:00","subscribe_limit":"","code":"300640","short_name":"德艺文创","stock_exchange":"sz"},"extraInfo":null,"totalRow":6}

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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
