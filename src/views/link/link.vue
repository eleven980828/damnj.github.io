<template>
  <div class="main">
    <NAV></NAV>
    <div class="context">
      <div v-show="$lang()">
        <h3>联系方式</h3>
      <p>邮箱:daaamnj@qq.com</p>
      <p>微信:daaamnj</p>
      </div>
      <div v-show="!$lang()" class="en">
        <h3>contact information</h3>
        <p>Email:daaamnj@qq.com</p>
        <p>WeChat:daaamnj</p>
      </div>
    </div>
    
    <img src="@/assets/home/contact.jpg" alt="" class="bg">
  </div>

  </template>
  <script>
   import NAV from "../../components/nav.vue"
   export default{
    components:{
    NAV,
  },
   }

  </script>
  <style lang="less" scoped>
  .main{
    width: 100%;
    height: 100vh;
    .context{
      width: 230px;
      font-weight: bold;
      text-align: center;
      margin: 0 auto;
      padding-top: 200px;
      h3{
        font-size:25px ;
        margin-bottom: 45px;
        // margin-top: 500px;
      }
      p{
        margin-bottom: 10px;
        font-size: 20px;
        text-align: start;
      }
    }
    .bg{
      display: block;
      width: 550px;
      margin: 0 auto;
      height: 800px;
      margin-top: 200px;
    }
    .en{
      width: 240px;
      h3{
        text-align: start;
      }
    }
  }
  </style>
  