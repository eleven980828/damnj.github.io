<template>
  <div class="main">
    <div class="titleLine"></div>
    <div class="NavBox">
      <div class="NavLeft">
        <h1>作品</h1>
        <h1>TATTOO</h1>
        <P>Liquid Lettering /</br> Natural Power /</br> Dark Work</P>
      </div>
      <div class="NavRight">
        <ul>
          <li>Instagram</li>
          <li>Red</li>
          <li>Wechat</li>
          <li>Shop</li>
        </ul>
      </div>
    </div>

    <div class="NavMid">
      <div class="NavMiddleBg animate__animated animate__delay-1s" v-bind:class="{ 'animate__fadeInDown': isactive }">
      </div>
    </div>

    <div class="booking">
      <!-- <div>
        <h1>BOOKING</h1>
        <p>1.Explain your idea</p>
        <p>2. Picture of the body part you're getting a tattoo </br>(lt helps me design the tattoo)</p>
        <p>3.Any special request in detail</p>
        <p>4.Confirm a date after the deposit is paid (1500rmb/hour)</p>
      </div> -->
    </div>
    <!-- <div class="foot">
      <div>
        <h1>预约</h1>
        <p>1.向我展示您需要纹身/遮盖的位置和大小</p>
        <p>2.没有稿子提供，您所见全都是freehand完成,</br>您只需选一个我的作品，方便我明白您想要的</br> ins / 小红书 / 微博:daaamnj</p>
        <p>3.支付一小时定金</br> (收费标准：1500rmb/h)</br> 定金不退</p>
        <p>4.确定时间,有事不能来可提前沟通更改时间</p>
        <div>
          <img src="~@/assets/home/foot1.jpg" alt="">
          <img src="~@/assets/home/foot2.jpg" alt="">
          <img src="~@/assets/home/foot3.jpg" alt="">
        </div>
      </div>
    </div> -->
    <div class="secondSc">
      <div class="bookimg">
        <h1>BOOKING</h1>
        <h1>预约</h1>
        <p>1.Explain your idea</p>
        <p>2. Picture of the body part you're getting a tattoo </br>(lt helps me design the tattoo)</p>
        <p>3.Any special request in detail</p>
        <p>4.Confirm a date after the deposit is paid (1500rmb/hour)</p>
        <p>1.向我展示您需要纹身/遮盖的位置和大小</p>
        <p>2.没有稿子提供，您所见全都是freehand完成,</br>您只需选一个我的作品，方便我明白您想要的</br> ins / 小红书 / 微博:daaamnj</p>
        <p>3.支付一小时定金</br> (收费标准：1500rmb/h)</br> 定金不退</p>
        <p>4.确定时间,有事不能来可提前沟通更改时间</p>
        
      </div>
      <div class="footimg">
        <img src="~@/assets/home/foot1.jpg" alt="">
        <img src="~@/assets/home/foot2.jpg" alt="">
        <img src="~@/assets/home/foot3.jpg" alt="">
      </div>
    </div>
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
      show: false,
      isactive: false
    };
  },
  mounted() {
    this.isactive = true
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

.main {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  padding-top: 20px;
  flex-direction: column;

  .secondSc {
    height: 100vh;
    background: url('~@/assets/home/footBg1.jpg') -230px 20px no-repeat, url('~@/assets/home/footBg2.jpg') 400px top no-repeat;
    background-size: 600px 800px, 600px 800px;
    padding-top: 500px;
    .footimg {
        display: flex;
        justify-content: space-between;
        width: 500px;
        margin: 0 auto;

        img {
          width: 150px;
        }
      }
    .bookimg {
      width: 500px;
      margin: 0 auto;
      h1 {
        text-align: center;
        font-size: 22px;
        margin-bottom: 30px;
        text-decoration: underline;
      }

      p {
        font-size: 18px;
        margin-left: 80px;
        text-align: start;
        font-weight: 600;
        margin-bottom: 30px;

        &:nth-of-type(4) {
          margin-bottom: 100px;
        }
      }
    }
  }

  .titleLine {
    background-color: black;
    height: 20px;
  }

  .NavBox {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 70px;

    .NavRight {
      font-size: 20px;
      font-weight: 600;

      ul {
        display: flex;
        flex-direction: column;

        li {
          margin-bottom: 10px;
        }
      }
    }

    .NavLeft {
      h1 {
        font-size: 20px;
        font-weight: 600;
      }

      p {
        margin-top: 20px;
        font-size: 16px;
        text-align: start;
      }
    }
  }

  .NavMid {
    margin: 0 auto;
    width: 250px;
    height: 350px;
    position: relative;
  }

  .NavMiddleBg {
    background: url('~@/assets/home/NAV.png') no-repeat center center;
    background-size: cover;
    width: 250px;
    height: 250px;
    position: absolute;
    top: 100px;
  }

  .booking {
    width: 100%;
    height: 1050px;
    margin-top: -4px;
    background: url('~@/assets/home/midbg1.png') -170px -140px no-repeat, url('~@/assets/home/midbg2.png') 545px -140px no-repeat, url('~@/assets/home/midbg4.png') right 1200px no-repeat, url('~@/assets/home/midbg3.png') right 1200px no-repeat;
    background-size: 50vw 1000px, 50vw 1000px;

    >div {
      width: 13vh;
      margin: 0 auto;

      h1 {
        text-align: center;
        font-size: 22px;
        margin-bottom: 30px;
      }

      p {
        font-size: 18px;
        text-align: start;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
