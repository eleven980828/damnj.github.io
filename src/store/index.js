import Vue from "vue";
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    onceopen: 0,
    scrollVal: 0,
    trip: [
      
    ],
    tripsSec: [
  {
    "ZNPlace": "中国 北京 7月",
    "EN": "Beijing Jul.2025",
    "PLACE": "Beijing, China, July",
    "ISOPEN": false,
    "YEARS": 2025
  },
  {
    "ZNPlace": "中国 北京 8月",
    "EN": "Beijing Aug.2025",
    "PLACE": "Beijing, China, August",
    "ISOPEN": false,
    "YEARS": 2025
  },
  {
    "ZNPlace": "中国 北京 9月",
    "EN": "Beijing Sep.2025",
    "PLACE": "Beijing, China, September",
    "ISOPEN": false,
    "YEARS": 2025
  },
  {
    "ZNPlace": "泰国 清迈 10月",
    "EN": "Chiangmai Oct.2025",
    "PLACE": "Chiangmai, Thailand, October",
    "ISOPEN": false,
    "YEARS": 2025
  },
  {
    "ZNPlace": "尼泊尔 加德满都 11月",
    "EN": "Kathmandu Nov.2025",
    "PLACE": "Kathmandu, Nepal, November",
    "ISOPEN": false,
    "YEARS": 2025
  },
  {
    "ZNPlace": "泰国 清迈 12月",
    "EN": "Chiangmai Dec.2025",
    "PLACE": "Chiangmai, Thailand, December",
    "ISOPEN": false,
    "YEARS": 2025
  },
  {
    "ZNPlace": "德国 柏林 3月",
    "EN": "Berlin Mar.2026",
    "PLACE": "Berlin, Germany, March",
    "ISOPEN": false,
    "YEARS": 2026
  },
  {
    "ZNPlace": "西班牙 巴塞罗纳 4月",
    "EN": "Barcelona Apr.2025",
    "PLACE": "Barcelona, Spain, April",
    "ISOPEN": false,
    "YEARS": 2026
  },
  {
    "ZNPlace": "中国 北京 5月",
    "EN": "Beijing May.2026",
    "PLACE": "Beijing, China, May",
    "ISOPEN": false,
    "YEARS": 2026
  },
  {
    "ZNPlace": "中国 北京 6月",
    "EN": "Beijing Jun.2026",
    "PLACE": "Beijing, China, June",
    "ISOPEN": false,
    "YEARS": 2026
  },
  {
    "ZNPlace": "中国 北京 7月",
    "EN": "Beijing Jul.2026",
    "PLACE": "Beijing, China, July",
    "ISOPEN": false,
    "YEARS": 2026
  },
  {
    "ZNPlace": "中国 北京 8月",
    "EN": "Beijing Aug.2026",
    "PLACE": "Beijing, China, August",
    "ISOPEN": false,
    "YEARS": 2026
  },
  {
    "ZNPlace": "中国 北京 9月",
    "EN": "Beijing Sep.2026",
    "PLACE": "Beijing, China, September",
    "ISOPEN": false,
    "YEARS": 2026
  },
  {
    "ZNPlace": "尼泊尔 加德满都 10月",
    "EN": "Kathmandu Oct.2026",
    "PLACE": "Kathmandu, Nepal, October",
    "ISOPEN": false,
    "YEARS": 2026
  },
  {
    "ZNPlace": "泰国 清迈 11月",
    "EN": "Chiangmai Nov.2026",
    "PLACE": "Chiangmai, Thailand, November",
    "ISOPEN": false,
    "YEARS": 2026
  },
  {
    "ZNPlace": "中国 北京 4月",
    "EN": "Beijing Apr.2027",
    "PLACE": "Beijing, China, April",
    "ISOPEN": false,
    "YEARS": 2027
  },
  {
    "ZNPlace": "中国 北京 5月",
    "EN": "Beijing May.2027",
    "PLACE": "Beijing, China, May",
    "ISOPEN": false,
    "YEARS": 2027
  },
  {
    "ZNPlace": "中国 北京 6月",
    "EN": "Beijing Jun.2027",
    "PLACE": "Beijing, China, June",
    "ISOPEN": false,
    "YEARS": 2027
  },
  {
    "ZNPlace": "目前预订已满，进入等候名单。",
    "EN": "Booked full, Waiting list.",
    "PLACE": "No reply",
    "ISOPEN": true,
    "YEARS": 2027
  }
]
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