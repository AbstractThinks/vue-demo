import userinfo from './UserInfo';

// initial state
const state = {
  ...userinfo.state,
}

// getters
const getters = {
  ...userinfo.getters,
}

const actions = {
  ...userinfo.actions,
}

// mutations
const mutations = {
  ...userinfo.mutations,
}

export default {
  state,
  getters,
  actions,
  mutations
}
