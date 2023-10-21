import Vue from "vue";
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    scrollVal: 0,
  },
  // 获取state数据
  getters: {
    token: (state) => state.user,
  },
  // 触发actions方法
  mutations: {
    SET_PROCESS_PEPOLE: (state, user) => {
      state.user = {};
    },
    setaddree(state, newval) {
      state.UserAddress = newval;
    },
  },
  // 变更state数据
  actions: {
    setLastAppId({ commit, state }, payload) {
      commit("SET_PROCESS_PEPOLE", payload);
    },
  },
  modules: {},
})