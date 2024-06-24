<template>
  <div class="main" :style="{ height: pageheight + 'px' }"  @click="$goto('home')">

    <div class="outLine">
      <div class="title">
        <p>· Antto 安童 ·</p>
        <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
        <i @click="$goback()" class="el-icon-arrow-left"></i>
      </div>
      <div class="midbut">
        <div class="bookline animate__animated animate__fadeInLeft" @click="$goto('plantingBook')">
          <div class="blackline">
            <div class="wordbox">
              <p>插</p>
              <p>画</p>
              <p>预</p>
              <p>定</p>
            </div>
            <span>PAINTING</span>
            <span>BOOKING</span>
            <div class="hole"></div>

          </div>
        </div>
        <div class="bookline animate__animated animate__fadeInRight" @click="$goto('booking')">
          <div class="blackline">
            <div class="wordbox">
              <p>文</p>
              <p>身</p>
              <p>预</p>
              <p>定</p>
            </div>
            <span>TATTOO</span>
            <span>BOOKING</span>
            <div class="hole"></div>
          </div>
        </div>
      </div>
      <div class="homebg">
        <div>
          <span></span>
          <img src="~@/assets/homeBg.jpg" alt="">
        </div>
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
      pageheight: 0
    };
  },
  mounted() {
    this.pageheight = window.innerHeight
    const appDom = document.getElementById('app');
    console.log(this.$store.state.scrollVal)
    if (this.$store.state.scrollVal) {
      appDom.scrollTo({
        top: this.$store.state.scrollVal,
        behavior: 'instant'
      });
    }
  },
  methods: {
    copy() {
      const storage = document.createElement('textarea');
      storage.value = 'anttoxaxa';
      this.$refs.reference.appendChild(storage);
      storage.select();
      storage.setSelectionRange(0, 99999);
      document.execCommand('copy');
      this.$refs.reference.removeChild(storage);
      // this.show=false;
      this.$message({
        message: '复制成功！ Copy successfully!',
        duration: 1500,
        type: 'success'
      });
      // setTimeout(() => {
      //   window.open('weixin://','_blank')
      // }, 1500);
    },
    scrolltop() {
      const appDom = document.getElementById('app');
      console.log(appDom.scrollTop)
      return appDom.scrollTop
    },
    scrollBooking() {
      const appDom = document.getElementById('app');
      const bookingtitle = document.getElementById('booktitle');
      console.log(bookingtitle.scrollTop)
      appDom.scrollTo({
        top: bookingtitle.getBoundingClientRect().top + window.pageYOffset,
        behavior: 'smooth'
      })
    },
    toTop() {
      const appDom = document.getElementById('app');
      appDom.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    engpush() {
      const appDom = document.getElementById('app');
      this.$store.state.scrollVal = appDom.scrollTop
      this.$router.push(
        { name: 'booking', params: { ty: 'en' } }
      )
    }
  },
  components: { RouterLink }
}
</script>
<style lang="less" scoped>
@basecolor: #cfcfcf;
@fontcolor: #aaaaaa;

.main {
  width: 750px;




  .ENG {
    p {
      font-size: 21px !important;
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

    .wordbox {
      display: block;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      p {
        display: inline-block;
        font-size: 60px;
      }
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
    top: 20%;
    transform: translate(-50%);
    left: 50%;
    width: 80%;
    display: flex;
    justify-content: space-between;


  }

  .bookline {
    box-sizing: border-box;
    width: 43%;
    background-color: #282924;
    height: 500px;
    padding: 8px 6px 6px 6px;
    position: relative;

    .blackline {
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      border: 5px solid black;
      color: #a9a9a9;
      font-size: 60px;
      padding: 50px;
      .wordbox {
        display: flex;
        height: 180px;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      span{
        font-size: 30px;
        display: block;
        text-align: center;
        margin-bottom: 15px;
        &:nth-of-type(1){
          margin-top: 30px;
        }
      }
      .hole{
        width: 60px;
        height: 60px;
        margin: 0 auto;
        border-radius: 50%;
        background-color: black;
        margin-top: 40px;
      }
    }

  }

  .title {
          background-color: #282924;
          padding: 10px 0 10px 0;
          position: relative;
  
          p {
              font-size: 16px;
              color: @basecolor;
              &:nth-of-type(1){
          margin-bottom: 4px;
        }
          }
  
          i {
              position: absolute;
              top: 50%;
              margin-top: -10px;
              left: 20px;
              color: @fontcolor;
              font-size: 30px;
          }
      }

}
</style>