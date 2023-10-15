<template>
  <div class="main" id="main">
    <div class="outLine">
      <div class="title">
        <p>· Antto 安童 ·</p>
        <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
        <i @click="$goback()" class="el-icon-arrow-left"></i>
      </div>

      <div class="midbut">
        <div class="works">
          <span>作品集</span>
          <span>works</span>
        </div>
        <p>更多作品更新，请跳转至 <a href="">Instagram </a> 或 <a href="">小红书</a> 进行浏览</p>
        <p>For more works,please jump to <a href="">lnstagram</a>.</p>
        <div class="antoo">
          <img src="~@/assets/tattoo/t1.jpg" alt="">
          <div class="tipsfont">
            <span>
              <p>安童</p>
              <p>ANTTO</p>
            </span>
          </div>
        </div>
        <div class="video">
          <video src="~@/assets/introduce.mp4" controls webkit-playsinline playsinline></video>
        </div>
        <div class="lazy">
          <el-image style="width: 100%;" :src="imgurl[0]" :preview-src-list="imgurl" lazy></el-image>
          <div class="speimg1">
            <el-image style="width: 30%; margin-right: 10%;" :src="imgurl[1]" :preview-src-list="imgurl" lazy></el-image>
            <el-image style="width: 30%;" :src="imgurl[2]" :preview-src-list="imgurl" lazy></el-image>
          </div>
          <div class="right">
            <el-image style="width: 43%; margin-left: auto;"  :src="imgurl[3]" :preview-src-list="imgurl" lazy></el-image>
          </div>
          <div class="right">
            <el-image style="width: 43%; margin-left: auto;"  :src="imgurl[4]" :preview-src-list="imgurl" lazy></el-image>
          </div>
          <div class="right">
            <el-image style="width: 43%; margin-left: auto;"  :src="imgurl[5]" :preview-src-list="imgurl" lazy></el-image>
          </div>
          <el-image style="width: 70%; margin-left: auto;"  :src="imgurl[6]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 70%; margin-left: auto;"  :src="imgurl[7]" :preview-src-list="imgurl" lazy></el-image>
          <div class="speimg2">
            <el-image style="width: 30%; margin-right: 10%;;"  :src="imgurl[8]" :preview-src-list="imgurl" lazy></el-image>
            <el-image style="width: 30%;;"  :src="imgurl[9]" :preview-src-list="imgurl" lazy></el-image>
          </div>
          <div class="right">
            <el-image style="width: 43%; margin-left: auto;"  :src="imgurl[10]" :preview-src-list="imgurl" lazy></el-image>
          </div>
          <div class="right">
            <el-image style="width: 46%; margin-left: auto;"  :src="imgurl[11]" :preview-src-list="imgurl" lazy></el-image>
          </div>
          <div class="right">
            <el-image style="width: 46%; margin-left: auto;"  :src="imgurl[12]" :preview-src-list="imgurl" lazy></el-image>
          </div>
          <el-image style="width: 70%; margin-left: auto;"  :src="imgurl[13]" :preview-src-list="imgurl" lazy></el-image>
        </div>
      </div>
      <div class="backtop" @click="toTop()">
        <i class="el-icon-top"></i>
      </div>
      <div class="lazyimg">
        
      </div>
      <div class="homebg">
        <p>所有作品为2020-2023年阶段创作，均已出售，仅作展示。</p>
        <p>禁止任何抄袭及盗用，违者必究。</p>
        <p>商业合作请联系: 86-17610888007 陈先生</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "APP",
  data() {
    return {
      imgurl:[
      require('@/assets/works/w1.jpg'),
      require('@/assets/works/w2.jpg'),
      require('@/assets/works/w3.jpg'),
      require('@/assets/works/w4.jpg'),
      require('@/assets/works/w5.jpg'),
      require('@/assets/works/w6.jpg'),
      require('@/assets/works/w7.jpg'),
      require('@/assets/works/w8.jpg'),
      require('@/assets/works/w9.jpg'),
      require('@/assets/works/w10.jpg'),
      require('@/assets/works/w11.jpg'),
      require('@/assets/works/w12.jpg'),
      require('@/assets/works/w13.jpg'),
      require('@/assets/works/w14.jpg'),

      ]
    };
  },
  methods: {
    toTop() {
      const appDom = document.getElementById("main");
      appDom.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  created() { },
  mounted() { },
};
</script>
<style lang="less" scoped>
@basecolor: #cfcfcf;
@fontcolor: #aaaaaa;
.flex{
  display: flex;
}

.el-image {
  margin-top: 50px;
}
.right{
  display: flex;
  justify-content: flex-end;
}
.img3{
  margin-top: 50px;
}
.speimg1{
  display: flex;
}
.speimg2{
  .speimg1;
  margin-top: 80px;
}
.main {
  max-height: 100vh;
  overflow: scroll;
  .lazy{
    width: 90%;
    margin: 0 auto;
  }
  .video{
    width: 90%;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 80px;
    video{
      width: 100%;
      height: 100%;
    }
  }
  .antoo {
    width: 90%;
    position: relative;
    margin: 0 auto;
    margin-top: 60px;

    img {
      width: 100%;
      display: block;
      height: auto;
    }

    .tipsfont {
      position: absolute;
      top: 400px;
      left: 50%;
      transform: translateX(-50%);

      >span {
        display: flex;
        position: relative;
        flex-direction: column;
        &::before{
          content: '';
          position: absolute;
          
          width: 80px;
          height: 80px;
          border: 1px solid @basecolor;
          border-right: none;
          top: 25px;
          left: -100px;
        }
        &::after{
          content: '';
          position: absolute;
          top: 25px;
          width: 80px;
          height: 80px;
          border: 1px solid @basecolor;
          border-left: none;
          right: -100px;
        }
        >p {
          font-size: 60px;
          font-weight: 800;
          color: @basecolor;

          &:last-child {
            font-size: 25px;
            font-weight: 400;
          }
        }
      }
    }
  }

  width: 750px;
  max-height: 100vh;
  position: relative;
  overflow-y: auto;

  .backtop {
    position: fixed;
    right: 5%;
    bottom: 5%;
    z-index: 5000;

    i {
      font-size: 50px;
    }
  }

  .lazyimg {
    width: 100%;
    margin: 0 auto;
    text-align: center;

    .el-image {
      min-height: 50px;
      display: block;
      margin: 0 auto;
    }
  }

  .homebg {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-bottom: 50px;
    text-align: center;

    img {
      width: 80%;
      height: auto;
      margin-bottom: 90px;
    }

    p {
      text-align: center;
      font-size: 18px;
      margin-bottom: 30px;
      color: @fontcolor;
    }
  }

  .footIcon {
    background-image: url("~@/assets/homeFooter.jpg");
    width: 60px;
    height: 100px;
    position: relative;
    margin: 80px auto;
    background-size: cover;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.2;
      position: absolute;
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

  .outLine {
    height: 100vh;
    position: relative;
  }

  .midbut {
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    text-align: center;

    .works{
      display: flex;
      width: 150px;
      height: 80px;
      margin: 0 auto;
        margin-bottom: 60px;
      flex-direction: column;
      border: 2px solid @fontcolor;
      >span {
      font-size: 32px;
      font-weight: 500;
      color: @fontcolor;
      text-align: center;

      &:last-of-type {
        font-size: 22px;
        text-indent: 10px;
        letter-spacing: 10px;
      }
    }
    }

    p {
      font-size: 18px;
      margin-bottom: 20px;
      color: @fontcolor;

      &:last-of-type {
        text-indent: 2px;
        letter-spacing: 2px;
      }

      a {
        text-decoration: underline;
        color: @fontcolor;
      }
    }
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
      font-size: 40px;
    }
  }
}</style>
