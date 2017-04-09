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
      api.get(
        `api/resources/queryByCondition?page=${queryCondition.page}&pageSize=${queryCondition.pagesize}`,
        (payload) => commit(types.NEWSTOCK_DETAIL_SUCCESS, payload),
        (payload) => commit(types.NEWSTOCK_DETAIL_FAILURE, payload),
        resolve,
        reject
      )
    })   
  }

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
    payload = {"message":"查询成功","rscode":"0","results":[{"former_stock_transfer_circulation":"","payment_date":"","lottery_rate":"","status":"0","ipo_date":"","issue_price":"9.41","fundament":" ","initial_circulation":"","subscribe_limit":"","lottery_result_publish_date":"2017/4/7","code":"300640","short_name":"德艺文创","stage":"1","online_issue_circulation":"2000","id":"14","issue_price_earning_ratio":"22.98","issue_circulation":"2000","online_issue_date":"2017-04-17 00:00:00","new_stock_issue_circulation":"2000","refurl":"","stock_exchange":"sz","real_raise_fund":""}],"error":false,"page":{"pageSizeSetted":true,"nextPage":1,"orderBy":null,"pageSize":20,"firstSetted":true,"prePage":1,"hasPre":false,"asc":true,"totalCount":1,"pageNo":1,"hasNext":false,"orderBySetted":false,"autoCount":false,"first":0,"totalPages":1},"rslevel":"0","firstData":{"former_stock_transfer_circulation":"","payment_date":"","lottery_rate":"","status":"0","ipo_date":"","issue_price":"9.41","fundament":" ","initial_circulation":"","subscribe_limit":"","lottery_result_publish_date":"2017/4/7","code":"300640","short_name":"德艺文创","stage":"1","online_issue_circulation":"2000","id":"14","issue_price_earning_ratio":"22.98","issue_circulation":"2000","online_issue_date":"2017-04-17 00:00:00","new_stock_issue_circulation":"2000","refurl":"","stock_exchange":"sz","real_raise_fund":""},"extraInfo":null,"totalRow":1}

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
