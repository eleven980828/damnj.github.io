<template>
  <!-- <div class="main" :style="{height: pageheight + 'px'}"> -->
  <div class="main">
    <div class="outLine">
      <div class="title">
       <img src="~@/assets/logo.png" alt="">
      </div>

      <div class="heroSection">
        <div class="midbg">
          <img src="~@/assets/homemid.png" alt="" />
        </div>
        <div class="midbut">
          <!-- <span @click="board=true"
            ><b>Bulletin Board <br />告示栏</b></span
          > -->
          <span @click="$goto('choseBook')">Booking <br />委托预订</span>
          <span @click="$goto('peripheral')"
            ><b>Online Shop <br />线上商城</b></span
          >
          <span @click="$goto('tattoo')"
            ><b>Tattoo Portfolio <br />文身作品集</b></span
          >
          <!-- <span @click="$goto('works')"><p>·</p><b>PAINTING 插画</b><p>·</p></span> -->
          <span @click="$goto('Link')"
            ><b>Contact Info <br />联系方式</b></span
          >
        </div>
      </div>
      <div class="introWrap">
        <div class="introHeader">
          <img src="~@/assets/head.jpg" alt="" />
          <div class="introMeta">
            <h2>Antto<span class="cnName">（安童）</span></h2>
            <p>Tattoo Artist / Image Maker</p>
          </div>
        </div>
        <div class="introText">
          <p>
            Using the body as a medium, I embed images into time and individual
            experience.
          </p>
          <p>
            My work draws from ancient texts such as Shan Hai Jing, not to
            retell mythology, but to reorganize its structures, symbols, and
            systems of order.
          </p>
          <p>
            I work between restraint and tension, focusing on the movement of
            lines, relationships of form, and the space left unfilled.
          </p>
          <p>
            Animals, plants, and other natural elements are not the image
            itself, but metaphors for force, boundaries, and states of being.
          </p>
        </div>
        <div class="introText cn">
          <p>安童（Antto）</p>
          <p>文身师 / 图像创作者</p>
          <p>以身体作为媒介，将图像嵌入时间与个体经验之中。</p>
          <p>
            创作多源于 山海经 等古代文本，但不止于复述神话，而是对其结构、象征与秩序的再组织。
          </p>
          <p>在克制与张力之间寻找平衡。强调线的走向、形的关系，以及未被填满的空间。</p>
          <p>
            动物、植物等自然元素，并非图像本身，而是一种关于力量、边界与存在状态的隐喻
          </p>
        </div>
      </div>
      <div class="toTopWrap">
        <button class="toTopBtn" @click="toTop">返回顶部 Return to top</button>
      </div>
      <!-- <div class="homebg">
        <div>
          <span></span>
          <img src="~@/assets/homeBg.jpg" alt="">
        </div>
      </div> -->
      <div class="record">
        <a href="https://beian.miit.gov.cn/" target="_blank"
          >京ICP备2023030174号-1</a
        >
      </div>
    </div>

    <!-- <van-popup v-model="board">
      <div class="midbox">
        <div class="blackline">
          <h2>公告栏</h2>
          <h3>Bulletin Board</h3>
          <p>
            截止至2027年7月，文身委托名额已满;<br />目前可在「文身预订」页面的"选择预约地点"申请等候名单。
          </p>
          <p>
            As of July 2027, the tattoo appointment slots are fully booked. You
            may currently apply for the waiting list under "Select Appointment
            Location" on the "Tattoo Booking" page.
          </p>
          <p>*提示Tips:</p>
          <p>
            请填写确定的题材、部位和面积;<br />并请您确保邮箱地址正确，我将会整理后主动发送「回执信息」至您预留的邮箱。<br />请您注意本人唯一邮箱，谨防虚假账号。
          </p>
          <p>
            Please fill in the confirmed design, location, and size of the
            tattoo. Also, ensure that your email address is correct, as l will
            organize and proactively send the "Booking Information Reply" to the
            email address you provided.<br />Please be aware that my only
            official email address is [your email address]. Be cautious of any
            fake accounts.
          </p>
          <p>E-mail: anttop@qq.com<br />ID: Antto安童</p>
          <div class="circle"></div>
        </div>
      </div>
    </van-popup> -->
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
      board: false,
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

    setTimeout(() => {
      if(this.$store.state.onceopen==0){
        this.board=true
        this.$store.state.onceopen=1
      }

    }, 1500);
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
/deep/ .van-popup--center{
  top: 44% !important;
}
.midbox {
  width: 70vw;
  background-color: #282924;
  height: 1000px;
  text-align: center;
  color: #d6d6d4 !important;
  padding: 6px;
  .circle {
    border-radius: 50%;
    background-color: black;
    width: 120px;
    height: 120px;
    margin: 80px auto;
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
.main {
  width: 750px;
  .heroSection {
    position: relative;
    height: 100vh;
  }
  .ENG {
    p {
      font-size: 21px !important;
    }
  }
  .midbg {
    position: absolute;
    top: 55%;
    width: 100%;
    img {
      width: 80%;
      margin-left: 10%;
    }
  }
  .record {
    position: relative;
    width: 100%;
    text-align: center;
    margin-top: 80px;
    padding-bottom: 40px;
    a {
      color: @fontcolor;
      font-size: 16px;
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
    bottom: 30px;

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
    min-height: 100vh;
    position: relative;
    padding-bottom: 40px;
  }

  .midbut {
    position: absolute;
    top: 12%;
    transform: translate(-50%);
    left: 50%;

    span {
      display: block;
      width: 100%;
      font-size: 18px;
      color: #aaaaaa;
      margin-bottom: 80px;
      text-align: center;
      line-height: 30px;
      // border: 1px solid #aaaaaa;
      // display: flex;
      // justify-content: space-between;
      padding: 0 20px 0 20px;
      p {
        font-size: 50px;
      }
      b {
        font-weight: normal;
      }
    }
  }

  .title {
    background-color: #282924;
    padding: 10px 0 10px 0;
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
  }

  .introWrap {
    margin-top: 40px;
    padding: 0 110px;
    color: #cfcfcf;
    text-align: left;
    writing-mode: horizontal-tb;
    line-height: 1.9;
    .introHeader {
      display: flex;
      align-items: center;
      gap: 26px;
      margin-bottom: 80px;
      img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        display: block;
        opacity: 0.9;
      }
      .introMeta {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        min-width: 0;
        height: 130px;
        padding-bottom: 6px;
      }
      h2 {
        font-size: 22px;
        font-weight: normal;
        margin: 6px 0 0 0;
        text-align: left;
        color: #bcbcbc;
        .cnName {
          font-size: 18px;
        }
      }
      p {
        font-size: 20px;
        color: #afafaf;
        text-align: left;
        margin: 0;
        line-height: 1.1;
      }
    }
    .introText {
      p {
        font-size: 18px;
        margin-bottom: 18px;
        color: #bcbcbc;
        text-align: left;
      }
      &.cn {
        margin-top: 100px;
        h3 {
          font-size: 30px;
          font-weight: normal;
          color: #d7d7d7;
          margin-bottom: 10px;
          text-align: left;
        }
        p {
          font-size: 20px;
        }
      }
    }
    .introHeader + .introText {
      margin-top: 18px;
    }
  }
  .toTopWrap {
    text-align: center;
    margin-top: 130px;
    .toTopBtn {
      border: 1px solid #6b6b6b;
      background: #282924;
      color: #c9c9c9;
      font-size: 16px;
      padding: 12px 32px;
      cursor: pointer;
      letter-spacing: 1px;
    }
  }
}
</style>
