<template>
    <div class="main" :style="{ height: pageheight + 'px' }">

        <div class="outLine">
            <div class="title">
                <img src="~@/assets/logo.png" alt="" />
                <i @click="$goback()" class="el-icon-arrow-left"></i>
            </div>

            <div class="midbox">
                <div class="blackline">
                    <h2>公告栏</h2>
                    <h3>Bulletin Board</h3>
                    <p>截止至2027年7月，文身委托名额已满;<br/>目前可在「文身预订」页面的"选择预约地点"申请等候名单。</p>
                    <p>As of July 2027, the tattoo appointment slots are fully booked. You may currently apply for the waiting list under "Select Appointment Location" on the "Tattoo Booking" page.</p>
                    <p>*提示Tips:</p>
                    <p>请填写确定的题材、部位和面积;<br/>并请您确保邮箱地址正确，我将会整理后主动发送「回执信息」至您预留的邮箱。<br/>请您注意本人唯一邮箱，谨防虚假账号。</p>
                    <p>Please fill in the confirmed design, location, and size of the tattoo. Also, ensure that your email address is correct, as l will organize and proactively send the "Booking Information Reply" to the email address you provided.<br/>Please be aware that my only official email address is [your email address]. Be cautious of any fake accounts.</p>
                    <p>E-mail: anttop@gq.com<br/>ID: Antto安童</p>
                    <div class="circle"></div>
                </div>
            </div>




        </div>



    </div>
</template>
<script>
import { RouterLink } from "vue-router";
import Vue from "vue";
import { Popup } from "vant";
import "vant/lib/popup/style";
Vue.use(Popup);
export default {
  name: "APP",
  data() {
    return {
      show: false,
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
      this.$message({
        message: "复制成功！ Copy successfully!",
        duration: 1500,
        type: "success",
      });
      // setTimeout(() => {
      //   window.open('weixin://','_blank')
      // }, 1500);
    },
    scrolltop() {
      const appDom = document.getElementById("app");
      console.log(appDom.scrollTop);
      return appDom.scrollTop;
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

.main {
  width: 750px;

  .midbox {
    width: 55%;
    background-color: #282924;
    height: 1050px;
    margin: 0 auto;
    margin-top: 150px;
    text-align: center;
    color: #d6d6d4 !important;
    padding: 6px;
    .circle{
        border-radius: 50%;
        background-color: black;
        width: 120px;
        height: 120px;
        margin: 50px auto;
    }

    .blackline {
      border: 4px solid black;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 30px;
      p {
        text-align: start !important;
        font-size: 16px;
        margin-bottom: 20px;
      }
      p:nth-of-type(3) {
        margin-top: 60px;
      }
      p:nth-of-type(6) {
        text-align: center !important;
      }
    }
    h2 {
      font-size: 30px;
      font-weight: normal;
    }
    h3 {
      font-weight: normal;
      font-size: 20px;
      color: #d6d6d4 !important;
      margin-top: 5px;
      margin-bottom: 30px;
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