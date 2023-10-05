<template>
  <div class="main">

    <div class="outLine">
      <div class="title">
        <p>· Antto 安童 ·</p>
        <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
      </div>
      <div class="midbut">
        <span>画</span>
        <span>文身</span>
      </div>
      <div class="homebg">
        <div>
          <span></span>
          <img src="~@/assets/homeBg.jpg" alt="">
        </div>
      </div>
      
    </div>

    <div class="outLine bookmain">
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
      <span>进行预定</span>
      <div class="footIcon" @click="() => toTop()"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'APP',
  data() {
    return {
    }
  },
  methods: {
    toTop(){
      const appDom = document.getElementById('app')
      appDom.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  created() {
  },
  mounted() {
  },
}
</script>
<style lang="less" scoped>
@basecolor: #cfcfcf;
@fontcolor: #aaaaaa;

.main {
  width: 750px;

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
      line-height: 80px;
      border: 1px solid #aaaaaa;
    }

    >p {
      font-size: 14px;
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
      width: 200px;
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

}</style>
