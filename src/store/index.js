import Vue from "vue";
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    scrollVal: 0,
    trip: [
      {years:'2025年',zh:'土耳其 安塔利亚 6月',en:'Antalya, Turkey Jun.2025',area:'Antalya, Turkey June',isOpen:false},
      {years:'2025年',zh:'中国 昆明 7月',en:'Kunming Jul.2025',area:'Kunming, China July',isOpen:false},
      {years:'2025年',zh:'中国 广州 8月',en:'Guangzhou Aug.2025',area:'Guangzhou, China August',isOpen:false},
      {years:'2025年',zh:'日本 大阪 9月',en:'Osaka, Japan Sep.2025',area:'Osaka, Japan September',isOpen:false},
      {years:'2025年',zh:'新加坡和尼泊尔 10月',en:'Singapore & Nepal Oct.2025',area:'Singapore & Nepal October',isOpen:false},
      {years:'2025年',zh:'中国 广州 11月',en:'Guangzhou Nov.2025',area:'Guangzhou, China November',isOpen:false},
      {years:'2025年',zh:'中国 广州 12月',en:'Guangzhou Dec.2025',area:'Guangzhou, China December',isOpen:false},
      {years:'2026年',zh:'中国 广州 1月',en:'Guangzhou Jan.2026',area:'Guangzhou, China January',isOpen:false},
      {years:'2026年',zh:'中国 广州 2月',en:'Guangzhou Feb.2026',area:'Guangzhou, China February',isOpen:false},
      {years:'2026年',zh:'欧洲 德国/西班牙 3月',en:'Germany/Spain, Europe Mar.2026',area:'Germany/Spain, Europe March',isOpen:false},
      {years:'2026年',zh:'中国 广州 4月',en:'Guangzhou Apr.2026',area:'Guangzhou, China April',isOpen:false},
      {years:'2026年',zh:'日本 大阪 5月',en:'Osaka, Japan May.2026',area:'Osaka, Japan May',isOpen:false},
      {years:'2026年',zh:'中国 新疆 6月',en:'Xinjiang, China Jun.2026',area:'Xinjiang, China June',isOpen:false},
      {years:'2026年',zh:'中国 广州 7月',en:'Guangzhou Jul.2026',area:'Guangzhou, China July',isOpen:false},
      {years:'2026年',zh:'中国 广州 8月',en:'Guangzhou Aug.2026',area:'Guangzhou, China August',isOpen:false},
      {years:'2026年',zh:'澳大利亚 墨尔本 9月',en:'Melbourne, Australia Sep.2026',area:'Melbourne, Australia September',isOpen:false},
      {years:'2026年',zh:'中国 广州 10月',en:'Guangzhou Oct.2026',area:'Guangzhou, China October',isOpen:false},
      {years:'2026年',zh:'中国 上海 11月',en:'Shanghai Nov.2026',area:'Shanghai, China November',isOpen:false},
      {years:'2026年',zh:'中国 广州 12月',en:'Guangzhou Dec.2026',area:'Guangzhou, China December',isOpen:false},
      {years:'2027年',zh:'中国 广州 1月',en:'Guangzhou Jan.2027',area:'Guangzhou, China January',isOpen:false},
      {years:'2027年',zh:'中国 广州 2月',en:'Guangzhou Feb.2027',area:'Guangzhou, China February',isOpen:false},
      {years:'2027年',zh:'日本 大阪 3月',en:'Osaka, Japan Mar.2027',area:'Osaka, Japan March',isOpen:false},
      {years:'2027年',zh:'中国 广州 4月',en:'Guangzhou Apr.2027',area:'Guangzhou, China April',isOpen:false},
      {years:'2027年',zh:'中国 广州 5月',en:'Guangzhou May.2027',area:'Guangzhou, China May',isOpen:false},
      {years:'2027年',zh:'中国 广州 6月',en:'Guangzhou Jun.2027',area:'Guangzhou, China June',isOpen:false},
      {years:'2027年',zh:'北欧 7月',en:'Northern Europe Jul.2027',area:'Northern Europe July',isOpen:false},
      {years:'2027年',zh:'中国 广州 8月',en:'Guangzhou Aug.2027',area:'Guangzhou, China August',isOpen:false},
      {years:'2027年',zh:'中国 广州 9月',en:'Guangzhou Sep.2027',area:'Guangzhou, China September',isOpen:false},
      {years:'2027年',zh:'中国 广州 10月',en:'Guangzhou Oct.2027',area:'Guangzhou, China October',isOpen:false},
      {years:'2027年',zh:'中国 广州 11月',en:'Guangzhou Nov.2027',area:'Guangzhou, China November',isOpen:false},
      {years:'2027年',zh:'中国 广州 12月',en:'Guangzhou Dec.2027',area:'Guangzhou, China December',isOpen:false}
    ],
  tripsSec:[],
  lang:true,
  sideshow:false
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