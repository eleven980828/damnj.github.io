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
    <div class="NavMiddleBg"></div>
    <div class="booking">
      <div>
        <h1>BOOKING</h1>
        <p>1.Explain your idea</p>
        <p>2. Picture of the body part you're getting a tattoo </br>(lt helps me design the tattoo)</p>
        <p>3.Any special request in detail</p>
        <p>4.Confirm a date after the deposit is paid (1500rmb/hour)</p>
      </div>
    </div>
    <div class="foot">
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
    </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import Vue from 'vue'
import { Popup } from 'vant';
import 'vant/lib/popup/style';
Vue.use(Popup)
export default {
  name: 'APP',
  data() {
    return {
      show: false
    };
  },
  mounted() {
    
  },
  methods: {

  },
  components: { RouterLink }
}
</script>
<style lang="less" scoped>
@basecolor: white;
@fontcolor: black;
.main{
  min-height: 100vh;
  .titleLine{
    background-color: black;
    height: 20px;
    margin-top: 20px;
  }
  .foot{
    height: 600px;
    margin-top: 100px;
    // overflow: hidden;
    background: url('~@/assets/home/footBg2.jpg') -230px 20px no-repeat,url('~@/assets/home/footBg1.jpg') 400px top no-repeat;
    background-size: 600px 800px,600px 800px;
    position: relative;
    >div{
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      top: -150px;
      width: 16vh;
      margin: 0 auto;
      >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        img{
          width: 110px;
        }
      }
      h1{
        text-align: center;
        font-size: 22px;
        margin-bottom: 30px;
      }
      p{
          font-size: 16px;  
          text-align: start;
          font-weight: 600;
          margin-bottom: 30px;
        }
    }

  }
  .NavBox{
    width: 90vw;
    margin: 0 auto;
    
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
    .NavRight{
      font-size: 22px;
      font-weight: 600;
      ul{
        display: flex;
        flex-direction: column;
        li{
          margin-bottom: 10px;
        }
      }
    }
    .NavLeft{
      h1{
        font-size: 22px;
        font-weight: 600;
      }
      p{
        margin-top: 20px;
        font-size: 16px;
        text-align: start;
      }
    }
  }
  .NavMiddleBg{
    background: url('~@/assets/home/NAV.jpg') no-repeat center center;
    background-size: cover;
    margin: 0 auto;
    width: 300px;
    margin-top: -50px;
    height: 300px;
  }
  .booking{
    width: 100%;
    height: 600px;
    margin-top: -4px;
    background: url('~@/assets/home/midBg1.jpg') left top no-repeat,url('~@/assets/home/midBg2.jpg') right top no-repeat;
    background-size: 20vh 700px,20vh 700px;
    padding-top: 100px;
    >div{
      width: 13vh;
      margin: 0 auto;
      h1{
        text-align: center;
        font-size: 22px;
        margin-bottom: 30px;
      }
      p{
          font-size: 18px;  
          text-align: start;
          margin-bottom: 30px;
        }
    }
  }
}

</style>
