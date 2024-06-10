import Vue from "vue";
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    scrollVal: 0,
    trip:[
      {years:'2024年',
      details:[
        {zh:'荷兰 莱顿 3月',en:'Leiden Mar.2024',area:'Leiden, Holland March',isOpen:false},
        {zh:'中国 北京 8月',en:'Beijing Aug.2024',area:'Beijing, China August',isOpen:false},
        {zh:'意大利 罗马 9月',en:'Rome Sep.2024',area:'Rome, Italy September',isOpen:false},
        {zh:'德国 柏林 9月',en:'Berlin Sep.2024',area:'Berlin, Germany September',isOpen:false},
        {zh:'法国 巴黎 10月',en:'Paris Oct.2024',area:'Paris, France October',isOpen:false},
        {zh:'尼泊尔 加德满都 11月',en:'Kathmandu Nov.2023',area:'Kathmandu, Nepal, November',isOpen:false},
        {zh:'泰国 清迈 11月',en:'Chiangmai Nov.2025',area:'Chiang Mai, Thailand, November',isOpen:false},
        {zh:'泰国 曼谷 12月',en:'Bangkok Dec.2024',area:'Bangkok, Thailand December',isOpen:false},
      ]},
      {years:'2025年',
      details:[
        {zh:'泰国 曼谷 1月',en:'Bangkok Jan.2025',area:'Bangkok, Thailand January',isOpen:false},
        {zh:'西班牙 巴塞罗纳 3月',en:'Barcelona Mar.2025',area:'Barcelona, Spain March',isOpen:false},
        {zh:'德国 法兰克福 4月',en:'Frankfurt Apr.2025',area:'Frankfurt, Germany April',isOpen:false},
        {zh:'中国 北京 6月',en:'Beijing Jun.2025',area:'Beijing, China June',isOpen:false},
        {zh:'中国 北京 7月',en:'Beijing Jul.2025',area:'Beijing, China, July',isOpen:false},
        {zh:'中国 北京 8月',en:'Beijing Aug.2025',area:'Beijing, China, August',isOpen:false},
        {zh:'尼泊尔 加德满都 11月',en:'Kathmandu Nov.2025',area:'Kathmandu, Nepal, November',isOpen:false},
      ]},
      {years:'2026年',
      details:[
        {zh:'中国 北京 5月',en:'Beijing Jun.2026',area:'Beijing, China May',isOpen:false},
        {zh:'中国 北京 7月',en:'Beijing Jul.2026',area:'Beijing, China, July',isOpen:true},
        {zh:'中国 北京 8月',en:'Beijing Aug.2026',area:'Beijing, China, August',isOpen:true},
      ]}
  ],
  tripsSec:[]
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