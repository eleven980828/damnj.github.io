<template>
  <div class="main">
     <div class="outLine">
      <div class="title">
        <p>· Antto 安童 ·</p>
        <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
        <i @click="$goback()" class="el-icon-arrow-left"></i>
      </div>
      <h3>文身预订与行程安排<br/>Tattoo booking and travel plan<br/>(2023-2025)</h3>
      <div class="time">
        <span>2023年:</span>
        <p>尼泊尔加德满都11月<br/>Kathmandu Nov.2023</p>
        <p>泰国清迈11月<br/>Chiangmai Nov.2023</p>
      </div>
      <div class="time">
        <span>2024年:</span>
        <p>荷兰 莱顿 3月 <i>(已满)</i><br/>Leiden Mar.2024 <i>(Bookings closed)</i><br/></p>
        <p>中国 北京 8月<br/>Beijing Aug.2024</p>
        <p>意大利 罗马9月 <i>(已满)</i><br/><br/>Rome Sep.2024 <i>(Bookings closed)</i></p>
        <p>德国 柏林9月 <i>(已满)</i><br/><br/>Berlin Sep.2024 <i>(Bookings closed)</i></p>
        <p>法国巴黎10月 <i>(已满)</i><br/><br/>Paris Oct.2024 <i>(Bookings closed)</i></p>
        <p>中国 北京 12月<br/>Beijing Dec.2024</p>
      </div>
      <div class="time">
        <span>2025年:</span>
        <p>西班牙巴塞罗纳3月<br/>Barcelona Mar.2025</p>
        <p>荷兰 莱顿 3月<br/>Leiden Mar.2025</p>
        <p>中国 北京5月<br/>Beijing May.2025</p>
      </div>
      <img @click="toTop" src="~@/assets/tripIcon.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        toTop() {
            const appDom = document.getElementById('app');
            appDom.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang='less' scoped>
@basecolor: #cfcfcf;
@fontcolor: #aaaaaa;

.main {
  width: 750px;
  text-align: center;
  color: @fontcolor;
  .time{
    font-size: 25px;
    margin-bottom: 80px;
    span{
        display: inline-block;
        margin-bottom: 20px;
        font-size: 27px;
    }
    p{
        margin-bottom: 30px;
        i{
          color: @basecolor;
        }
    }
    
  }
  h3{
    font-size: 30px;
    font-weight: normal;
    line-height: 40px;
    word-spacing: 4px;
    margin-top: 50px;
    margin-bottom: 80px;
  }
.outLine {
    height: 100vh;
    position: relative;
  }
  img{
    width: 150px;
    height: auto;
    margin-bottom: 80px;
  }
  .title {
    background-color: #282924;
    padding: 5px 0 5px 0;
    position: relative;

    p {
      font-size: 12px;
      color: @basecolor;
    }
    i{
      position: absolute;
      top: 50%;
      margin-top: -15px;
      left: 20px;
      color: @fontcolor;
      font-size: 40px;
    }
  }
}
</style>