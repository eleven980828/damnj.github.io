<template>
  <div class="main">

    <div class="outLine">
      <div class="title">
        <p>· Antto 安童 ·</p>
        <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
      </div>
      <div class="link">
        <a href="https://instagram.com/anttoxaxa?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">Instagram</a>
        <a href="https://www.xiaohongshu.com/user/profile/5fc3b0680000000001000040?xhsshare=CopyLink&appuid=5fc3b0680000000001000040&apptime=1696686102">Xiaohongshu</a>
        <a href="https://weibo.com/u/2661368835">Weibo</a>
        <a @click.stop="show=true">WeChat</a>
      </div>
      <div class="midbut">
        <span @click="$goto('painting')">画 Painting</span>
        <span @click="$goto('tattoo')">文身 Tattoo</span>
        <span @click="$goto('tripPlane')">差旅信息 Travel plan</span>
      </div>
      <div class="homebg">
        <div>
          <span></span>
          <img src="~@/assets/homeBg.jpg" alt="">
        </div>
      </div>
      
    </div>

    <div class="outLine bookmain ">
      <div class="booktitle"><span>·</span> BOOKING 预订信息 <span>·</span></div>
      <p>您好</p>
      <p>感谢您对我的文身作品感兴趣，为方便沟通，麻烦仔细阅读。</p>
      <div class="bookline"></div>
      <p><i></i>题材选择</p>
      <p>推荐来自东方的内容，比如《山海经》是我大多数创作的灵感来源。<br />当然，通过沟通，共同创造一个新概念的题材也可以。</p>
      <p>*注:不定期发布的手绘画，非文身手稿，是为了从文身以外的方式,来分享本人的创作风格提供参考。</p>
      <p><i></i>制作方式</p>
      <p>文身均为现场设计(根据承载者的身体结构进行手绘)<br />除极少见题材，一般不会提前绘制画稿。<br />进行文身前，会提供预约所需的设计思路,，感谢信任。</p>
      <p><i></i>预订时间</p>
      <p>国内的预订，请提前9-12个月预约。<br />其他国家的预订，请结合差旅信息预订名额。</p>
      <p>预约越提前越好，我的文身设计是需要双方沟通出来的，而我也需要更多的时间来消化您的想法。</p>
      <p><i></i>计费方式</p>
      <p>2000元/小时，定金2000元。</p>
      <p>预订以定金为准，请支付定金后，发送微信填写文身所需资料。</p>
      <span @click="$goto('booking')">进行预定</span>
    </div>

    <!-- english -->
    <div class="outLine bookmain ENG">
      <p>Hello.</p>
      <p>Thank you for your interest in my tattoo works.<br/> For the convenience of communication, please read it carefully.</p>
      <div class="bookline"></div>
      <p><i></i>Theme Selection</p>
      <p>I recommend content from the East, such as The Book of Mountains and Seas, which is the source of inspiration for most of my creations.<br />Of course, through communication, co-creating a new concept of the subiect matter can also be.</p>
      <p>* Note: irregularly published hand drawings, non-tattooed manuscripts, are intended for use by means other than tattooing.To share my creative style for reference.</p>
      <p><i></i>Production Method</p>
      <p>The tattoos are designed on-site (hand-painted according to the body structure of the bearer)<br />Except for very few subjects, drawings are not usually drawn in advance.<br />Before the tattoo, we will provide the design ideas required for the appointment, thank you for your trust.</p>
      <p><i></i>Booking Time</p>
      <p>For domestic bookings, please book 9-12 months in advance.<br />For bookings from other countries, please combine my travel information.</p>
      <p>The sooner the appointment is made, the better. My tattoo design needs to be communicated by both parties, and I also need more time to digest your ideas.</p>
      <p><i></i>Billing Method</p>
      <p>2000 yuan/hour, deposit 2000 yuan.</p>
      <p>Reservation is subject to deposit, please pay the deposit and send Instagram to fill in the information required for tattoo.</p>
      <span>BOOKING</span>
      <div class="footIcon" @click="() => toTop()"></div>
    </div>
      <van-popup v-model="show"><a href="weixin://" target="_blank"><img src="~@/assets/qr.jpg" style="width:300px;height:auto" alt=""/></a></van-popup>

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
          show:false
        };
    },
    methods: {
        toTop() {
            const appDom = document.getElementById('app');
            appDom.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
    created() {
    },
    mounted() {
    },
    components: { RouterLink }
}
</script>
<style lang="less" scoped>
@basecolor: #cfcfcf;
@fontcolor: #aaaaaa;

.main {
  width: 750px;
  .link{
    float: right;
    display: flex;
    margin-right: 20px;
    flex-direction: column;
    a{
      font-size: 18px;
      margin-top: 20px;
      color: @fontcolor;
      text-align: right;
    }
  }
  .footIcon {
    background-image: url('~@/assets/homeFooter.jpg');
    width: 60px;
    height: 100px;
    position: relative;
    margin: 80px auto;
    background-size: cover;
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.2;
      position: absolute;
    }
  }

  .bookmain {
    height: auto !important;
    min-height: 100vh !important;

    >span {
      display: block;
      margin: 0 auto;
      width: 200px;
      height: 80px;
      font-size: 26px;
      color: #aaaaaa;
      margin-bottom: 30px;
      text-align: center;
      margin-top: 80px;
      margin-bottom: 130px;
      line-height: 80px;
      border: 1px solid #aaaaaa;
    }

    >p {
      font-size: 18px;
      padding-left: 10px;
      text-align: start;
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      line-height: 40px;
      color: @fontcolor;

      i {
        border-radius: 50%;
        width: 25px;
        margin-right: 15px;
        display: inline-block;
        height: 25px;
        border: 1px solid @fontcolor;
      }

      &:nth-of-type(2) {
        margin-top: 100px;
      }

      &:nth-of-type(5) {
        margin-bottom: 60px;
      }

      &:nth-of-type(7) {
        margin-bottom: 60px;
      }

      &:nth-of-type(10) {
        margin-bottom: 60px;
      }

    }

    .bookline {
      margin-top: 100px;
      margin-bottom: 100px;
      border-bottom: 1px solid #111111;
    }
  }
 .ENG{
  p{
    font-size: 25px !important;
  }
 }
  .booktitle {
    text-align: center;
    font-size: 30px;
    color: @fontcolor;
    margin-bottom: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 60px;
    }
  }

  .homebg {
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0;

    div {
      width: 100%;
      height: 100%;
      position: relative;

      span {
        width: 100%;
        height: 100%;
        display: block;
        background-color: black;
        opacity: 0.5;
        position: absolute;
      }

      img {
        width: 100%;
        height: auto;
        animation: homeBgOp linear 2.5s;
        animation-iteration-count: infinite;
      }
    }

  }

  @keyframes homeBgOp {
    0% {
      opacity: 0.5;
    }

    50% {
      opacity: 0.35;
    }

    100% {
      opacity: 0.5;
    }
  }

  .outLine {
    height: 96vh;
    position: relative;
  }

  .midbut {
    position: absolute;
    top: 30%;
    transform: translate(-50%);
    left: 50%;

    span {
      display: block;
      margin: 0 auto;
      width: 250px;
      height: 50px;
      font-size: 18px;
      color: #aaaaaa;
      margin-bottom: 30px;
      text-align: center;
      line-height: 50px;
      border: 1px solid #aaaaaa;
    }
  }

  .title {
    background-color: #282924;
    padding: 5px 0 5px 0;

    p {
      font-size: 12px;
      color: @basecolor;
    }
  }

}
</style>
