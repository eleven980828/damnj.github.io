<template>
  <div class="main" :style="{ height: pageheight + 'px' }">
    <div class="outLine">
      <div class="title">
        <img src="~@/assets/logo.png" alt="" />
        <i @click="$goback()" class="el-icon-arrow-left"></i>
      </div>

      <div class="newblack">
        <a href="https://www.xiaohongshu.com/user/profile/5fc3b0680000000001000040?xhsshare=CopyLink&appuid=5fc3b0680000000001000040&apptime=1719197151">
          <img src="~@/assets/xiaohonghsu.png" alt="" />
        </a>
        <a href="https://www.instagram.com/anttoxaxa?igsh=MThnY2ZjeXJrcWZhaA%3D%3D&utm_source=qr">
          <img src="~@/assets/ins.png" alt="" />
        </a>
        
        <img src="~@/assets/wechat.png" alt="" @click="wechat = true" />
      </div>
    </div>

    <van-popup v-model="wechat">
      <div class="midbox">
        <div class="blackline">
          <a @click="copy()" ref="reference">anttoxaxa</a>
          <h3>点击微信号，即可复制。</h3>
          <h3>请自行跳转至微信添加好友。</h3>
        </div>
        <van-notify v-model="show1" type="success">
          <span class="succcopy">复制成功！ Copy successfully!</span>
        </van-notify>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import Vue from "vue";
export default {
  name: "APP",
  data() {
    return {
        show1:false,
      show: false,
      wechat: false,
      pageheight: 0,
    };
  },
  mounted() {
    this.pageheight = window.innerHeight;
    const appDom = document.getElementById("app");
    console.log(this.$store.state.scrollVal);
    if (this.$store.state.scrollVal) {
      appDom.scrollTo({
        top: this.$store.state.scrollVal,
        behavior: "instant",
      });
    }
  },
  methods: {
    copy() {
      const storage = document.createElement("textarea");
      storage.value = "anttoxaxa";
      this.$refs.reference.appendChild(storage);
      storage.select();
      storage.setSelectionRange(0, 99999);
      document.execCommand("copy");
      this.$refs.reference.removeChild(storage);
      // this.show=false;
    //   this.$message({
    //     message: "复制成功！ Copy successfully!",
    //     duration: 11500,
    //     type: "success",
    //   });
      this.showsucc()
      // setTimeout(() => {
      //   window.open('weixin://','_blank')
      // }, 1500);
    },
    scrolltop() {
      const appDom = document.getElementById("app");
      console.log(appDom.scrollTop);
      return appDom.scrollTop;
    },
    showsucc(){
        this.show1=true;
        setTimeout(() => {
            this.show1=false
        }, 2000);
    },
    scrollBooking() {
      const appDom = document.getElementById("app");
      const bookingtitle = document.getElementById("booktitle");
      console.log(bookingtitle.scrollTop);
      appDom.scrollTo({
        top: bookingtitle.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
      });
    },
    toTop() {
      const appDom = document.getElementById("app");
      appDom.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    engpush() {
      const appDom = document.getElementById("app");
      this.$store.state.scrollVal = appDom.scrollTop;
      this.$router.push({ name: "booking", params: { ty: "en" } });
    },
  },
  components: { RouterLink },
};
</script>
<style lang="less" scoped>
@basecolor: #cfcfcf;
@fontcolor: #aaaaaa;
/deep/ .el-message {
  z-index: 3000 !important; /* 确保高于 Popup 的 z-index */
}

/deep/ .van-popup--center {
  top: 44% !important;
}
/deep/ .van-notify--success{
     background-color: #282924;
}
.succcopy{
     background-color: #282924;
     display: block;
     width: 100%;
     font-size: 18px;
     height: 100%;
}
.main {
  width: 750px;

  .newblack {
    width: 280px;
    height: 760px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 160px auto 0;
    padding: 90px 0;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: #282924;
    a {
      width: 78px;
      height: 78px;
    }
    img {
      width: 78px;
      height: 78px;
    }
  }
  .midbox {
    width: 500px;
    background-color: #282924;
    height: 1000px;
    text-align: center;
    color: #d6d6d4 !important;
    padding: 6px;

    .blackline {
      border: 4px solid black;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding-top: 300px;
      a {
        display: inline-block;
        margin-bottom: 300px;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 18px;
      color: #d6d6d4 !important;
      margin-top: 20px;
    }

    a {
      font-size: 35px;
      color: #d6d6d4 !important;
      text-decoration: underline;
    }
    .hole {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      margin: 0 auto;
      background-color: black;
      margin-top: 100px;
    }
  }

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

  .outLine {
    height: 96vh;
    position: relative;
  }

  .title {
    background-color: #282924;
    padding: 10px 0 10px 0;
    position: relative;
    img {
      display: block;
      margin: 0 auto;
      width: 50px;
      height: 50px;
    }

    p {
      font-size: 16px;
      color: @basecolor;
      &:nth-of-type(1) {
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