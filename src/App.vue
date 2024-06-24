<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
const axios = require('axios')
const Papa = require('papaparse');
export default {
  name: 'App',
  components: {
  }
  ,
  async mounted() {
    try {
      // const response = await axios.get('http://111.229.234.243:3000/api/proxy')
      // const handleMes = Papa.parse(response.data, { header: true, dynamicTyping: true }).data;
      this.$store.state.tripsSec = handleMes
      let formattedData = handleMes.reduce((acc, current) => {
        // 判断当前的年份是否在已格式化的数据里已经存在
        let existingYear = acc.find(a => a.years === `${current.YEARS}年`);

        // 如果存在
        if (existingYear) {
          // 向details中添加当前数据
          existingYear.details.push({
            zh: current.ZNPlace,
            en: current.EN,
            area: current.PLACE,
            isOpen: current.ISOPEN
          });
        }
        // 如果不存在
        else {
          // 创建新的年份类并添加当前数据至details
          acc.push({
            years: `${current.YEARS}年`,
            details: [{
              zh: current.ZNPlace,
              en: current.EN,
              area: current.PLACE,
              isOpen: current.ISOPEN
            }]
          });
        }
        return acc;
      }, []);
      this.$store.state.trip=formattedData
      console.log(this.$store.state.trip)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="less">
@import "./styles/global.less";

#app {
  overflow: auto;
  max-height: 100vh;

}
</style>
