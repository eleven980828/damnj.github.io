<template>
  <div class="main">
    <div class="NavBox">
      <img src="@/assets/home/navbut.png" alt="" @click="show=true">
      <img src="@/assets/home/LOGO.png" alt="">
      <img src="@/assets/home/China.png" alt="">
    </div>

    <div class="NavMid">
      <div class="NavMiddleBg animate__animated animate__delay-1s" v-bind:class="{ 'animate__fadeInDown': isactive }">
      </div>
    </div>

    <div class="sideimg">
      <img src="@/assets/home/foot2.jpg" alt="">
      <img src="@/assets/home/foot3.jpg" alt="">
      <img src="@/assets/home/foot1.jpg" alt="">
      <img src="@/assets/home/foot4.jpg" alt="">
    </div>

    <div class="booking">
      <div class="lbg animate__animated animate__fadeInLeft"></div>
      <div class="rbg animate__animated animate__fadeInRight"></div>
    </div>
    <van-popup v-model="show" position="left" :style="{ height: '100%' , width: '40%'}" >
      <div class="sideNav">
        <img src="@/assets/home/sideNavImg.png" alt="">
        <ul>
          <li>作品</li>
          <li>预约</li>
          <li>周边</li>
          <li>联系</li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>
<script>
import 'animate.css'
import { RouterLink } from 'vue-router';
import Vue from 'vue'
import { Popup } from 'vant';
import 'vant/lib/popup/style';
Vue.use(Popup)
export default {
  name: 'APP',
  data() {
    return {
      show: true,
      isactive: false
    };
  },
  mounted() {
    
    this.$nextTick(function () {
      this.isactive = true
    })
  },
  methods: {
    
  },
  components: { RouterLink }
}
</script>
<style lang="less" scoped>
@basecolor: white;
@fontcolor: black;

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

.animate__animated.animate__animated {
  --animate-duration: 2s;
}

:root {
  --animate-duration: 2s;
}
.van-popup{
  overflow: hidden;
  max-width: 40%;
}
@font-face {
  font-family: 'xianyun';
  src: url('~@/assets/font/337.ttf') format('woff2');
  font-weight: normal;
  font-style: normal;
}
.sideNav{
  width: 100%;
  img{
    width: 100%;
  }
  ul{
      font-family: "xianyun" , sans-serif;
    font-size: 30px;
    li{
      line-height: 80px;
      text-indent: 40px;
      // font-weight: bold;
    }
  }
}
.main {
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  .secondSc {
    height: 100vh;
    background: url('~@/assets/home/footBg1.jpg') -230px 20px no-repeat, url('~@/assets/home/footBg2.jpg') 400px top no-repeat;
    background-size: 600px 800px, 600px 800px;
    padding-top: 500px;
 
  
  }
  .sideimg{
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 8vh;
    img{
      width: 130px;
      height: 100px;
      margin-bottom: 23px;
      &:nth-of-type(2){
        width: 100px;
      }
    }
  }
  .NavMid {
    margin: 0 auto;
    width: 330px;
    height: 400px;
    position: absolute;
    top: 20%;
    right: calc(50% - 165px);

  }
  .NavBox{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    img{
      width: 50px;
      height: 40px;
      &:nth-of-type(2){
        width: 190px;
        height: 25px;
      }
      &:nth-of-type(3){
        width: 45px;
        height: 30px;
      }
    }
  }

  .NavMiddleBg {
    background: url('~@/assets/home/NAV.png') no-repeat center center;
    background-size: cover;
    width: 330px;
    height: 400px;
  }

  .booking {
    position: absolute;
    width: 100%;
    overflow: hidden;
    top: 30%;
    height: 1050px;
    div{
      position: absolute;
    }
   .rbg{
    width: 510px;
    height: 1095px;
    background-image: url('~@/assets/home/midbg2.png');
    background-size: cover;
    right: -200px;
   }
   .lbg{
    width: 510px;
    height: 1095px;
    background-image: url('~@/assets/home/midbg1.png');
    background-size: cover;
    left: -200px;
   }
    
  }
}
</style>
