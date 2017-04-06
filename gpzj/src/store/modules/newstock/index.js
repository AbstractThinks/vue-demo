import newstockrule from './NewStockRule';
import newstockremind from './NewStockRemind';
import newstocklist from './NewStockList';
import newstockdetail from './NewStockDetail';
// initial state
const state = {
  ...newstockrule.state,
  ...newstockremind.state,
  ...newstocklist.state,
  ...newstockdetail.state

}

// getters
const getters = {
  ...newstockrule.getters,
  ...newstockremind.getters,
  ...newstocklist.getters,
  ...newstockdetail.getters
}

const actions = {
  ...newstockrule.actions,
  ...newstockremind.actions,
  ...newstocklist.actions,
  ...newstockdetail.actions
}

// mutations
const mutations = {
  ...newstockrule.mutations,
  ...newstockremind.mutations,
  ...newstocklist.mutations,
  ...newstockdetail.mutations
}

export default {
  state,
  getters,
  actions,
  mutations
}
