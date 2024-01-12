<template>
  <div class="main">
    <div class="outLine">
      <div class="title">
        <p>· Antto 安童 ·</p>
        <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
        <i @click="$goback()" class="el-icon-arrow-left"></i>
      </div>
      <h3>文身预订与行程安排<br />Tattoo booking and travel plan<br />(2024-2025)</h3>
      <div class="time" v-for="(item,index) in $store.state.trip" :key="index">
        <span>{{ item.years }}</span>
        <p v-for="(msg,ind) in item.details" :key="ind">
          {{ msg.zh }} <i>{{ msg.isOpen ? '' : '(已满)' }}</i><br />{{ msg.en }}<i>{{ msg.isOpen ? '' : '(Bookings closed)' }}</i>
        </p>
      </div>

      <img @click="toTop" src="~@/assets/tripIcon.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    
    const appDom = document.getElementById('app');
    appDom.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  },
  methods: {
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

  .time {
    font-size: 25px;
    margin-bottom: 80px;

    span {
      display: inline-block;
      margin-bottom: 20px;
      font-size: 27px;
    }

    p {
      margin-bottom: 30px;

      i {
        color: @basecolor;
      }
    }

  }

  h3 {
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

  img {
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

    i {
      position: absolute;
      top: 50%;
      margin-top: -15px;
      left: 20px;
      color: @fontcolor;
      font-size: 30px;
    }
  }
}
</style>