<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
