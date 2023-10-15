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
        <p>更多作品更新，请跳转至 <a href="https://instagram.com/anttoxaxa?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">Instagram </a> 或 <a href="https://www.xiaohongshu.com/user/profile/5fc3b0680000000001000040?xhsshare=CopyLink&appuid=5fc3b0680000000001000040&apptime=1696686102">小红书</a> 进行浏览</p>
        <p>For more works,please jump to <a href="https://instagram.com/anttoxaxa?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">lnstagram</a>.</p>
        <div class="antoo">
          <img src="~@/assets/works/first.jpg" alt="">
          <div class="tipsfont">
            <span>
              <p>安童</p>
              <p>ANTTO</p>
            </span>
          </div>
        </div>
        <div class="video">
          <video src="~@/assets/introduce.mp4" controls webkit-playsinline playsinline poster="~@/assets/videoBg.png"></video>
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
          <el-image style="width: 100%; margin-left: auto;"  :src="imgurl[6]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 100%; margin-left: auto;"  :src="imgurl[7]" :preview-src-list="imgurl" lazy></el-image>
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
          <el-image style="width: 100%; margin-left: auto;"  :src="imgurl[13]" :preview-src-list="imgurl" lazy></el-image>
          <div style="display: flex;">
          <el-image style="width: 30%; margin-right: 10%;"  :src="imgurl[14]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 30%; "  :src="imgurl[15]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="speimg3">
          <el-image style="width: 32%;"  :src="imgurl[16]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 32%;"  :src="imgurl[17]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 32%; "  :src="imgurl[18]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="right">
            <el-image style="width: 46%;margin-top: 80px;"  :src="imgurl[19]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="left">
          <el-image style="width: 46%;"  :src="imgurl[20]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 46%;"  :src="imgurl[21]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 46%;"  :src="imgurl[22]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <el-image style="width: 100%; margin-top: 80px; "  :src="imgurl[23]" :preview-src-list="imgurl" lazy></el-image>
        <div style="display: flex;">
          <el-image style="width: 30%; margin-right: 10%;"  :src="imgurl[24]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 30%;"  :src="imgurl[25]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="right">
            <el-image style="width: 46%;"  :src="imgurl[26]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div style="display: flex;">
          <el-image style="width: 27%; margin-right: 10%;"  :src="imgurl[27]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 27%;"  :src="imgurl[28]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <el-image style="width: 100%;" :src="imgurl[29]" :preview-src-list="imgurl" lazy></el-image>
        <div>
          <el-image style="width: 27%; margin-right: 5%;"  :src="imgurl[30]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 27%;"  :src="imgurl[31]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="right">
            <el-image style="width: 46%;"  :src="imgurl[32]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="speimg3" style="margin-top: 80px;">
          <el-image style="width: 32%;"  :src="imgurl[33]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 32%;"  :src="imgurl[34]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 32%;"  :src="imgurl[35]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="right" style="margin-top: 80px;">
            <el-image style="width: 46%;"  :src="imgurl[36]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="right">
            <el-image style="width: 46%;"  :src="imgurl[37]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <el-image style="width: 100%; margin-top: 80px;" :src="imgurl[38]" :preview-src-list="imgurl" lazy></el-image>
        <div style="margin-top: 80px;">
          <el-image style="width: 27%; margin-right: 5%;"  :src="imgurl[39]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 27%;"  :src="imgurl[40]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="speimg3" style="margin-top: 80px;">
          <el-image style="width: 32%;"  :src="imgurl[41]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 32%;"  :src="imgurl[42]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 32%;"  :src="imgurl[43]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="right" style="margin-top: 80px;">
            <el-image style="width: 50%;"  :src="imgurl[44]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="left">
          <el-image style="width: 50%;"  :src="imgurl[45]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 50%;"  :src="imgurl[46]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 50%;"  :src="imgurl[47]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="threeimg">
          <div class="threeimgleft">
            <el-image style="width: 50%;" :fit="fill"  :src="imgurl[48]" :preview-src-list="imgurl" lazy></el-image>
            <div>
              <el-image style="width: 100%;"  :src="imgurl[49]" :preview-src-list="imgurl" lazy></el-image>
              <el-image style="width: 100%;"  :src="imgurl[50]" :preview-src-list="imgurl" lazy></el-image>
            </div>
          </div>
          <div class="threeimgright">
            <el-image style="width: 100%;"  :src="imgurl[51]" :preview-src-list="imgurl" lazy></el-image>
          </div>
        </div>
        <div class="right" style="margin-top: 30px;">
            <el-image style="width: 50%;"  :src="imgurl[52]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <el-image style="width:100%;" :style="{marginTop:'80px'}"  :src="imgurl[53]" :preview-src-list="imgurl" lazy></el-image>
        <el-image style="width: 100%;" :style="{marginTop:'80px'}"  :src="imgurl[54]" :preview-src-list="imgurl" lazy></el-image>
        <div>
          <el-image style="width: 35%; margin-right: 5%;"  :src="imgurl[55]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 35%;"  :src="imgurl[56]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="right">
            <el-image style="width: 50%;"  :src="imgurl[57]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="left" style="margin-top: 60px;">
          <el-image style="width: 46%;"  :src="imgurl[58]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 46%;"  :src="imgurl[59]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <el-image style="width:100%;" :style="{marginTop:'80px'}"  :src="imgurl[60]" :preview-src-list="imgurl" lazy></el-image>
        <div style="margin-top: 30px;">
          <el-image style="width: 30%; margin-right: 5%;"  :src="imgurl[61]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 30%;"  :src="imgurl[62]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="speimg3" style="margin-top: 80px;">
          <el-image style="width: 32%;"  :src="imgurl[63]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 32%;"  :src="imgurl[64]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 32%;"  :src="imgurl[65]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="right">
            <el-image style="width: 50%;" :style="{marginTop:'80px'}"  :src="imgurl[66]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <el-image style="width:100%;" :style="{marginTop:'80px'}"  :src="imgurl[67]" :preview-src-list="imgurl" lazy></el-image>
        <div class="right">
            <el-image style="width: 50%;" :style="{marginTop:'80px'}"  :src="imgurl[68]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="right">
            <el-image style="width: 50%;" :src="imgurl[69]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <el-image style="width:100%;" :style="{marginTop:'80px'}"  :src="imgurl[70]" :preview-src-list="imgurl" lazy></el-image>
        <el-image style="width:100%;" :style="{marginTop:'80px'}"  :src="imgurl[71]" :preview-src-list="imgurl" lazy></el-image>
        <div class="right">
            <el-image style="width: 50%;" :src="imgurl[73]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="speimg3">
          <el-image style="width: 32%;"  :src="imgurl[72]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 32%;"  :src="imgurl[74]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 32%;"  :src="imgurl[75]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="left" style="margin-top: 60px;">
          <el-image style="width: 46%;"  :src="imgurl[76]" :preview-src-list="imgurl" lazy></el-image>
          <el-image style="width: 46%;"  :src="imgurl[77]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <div class="right">
            <el-image style="width: 50%;" :src="imgurl[78]" :preview-src-list="imgurl" lazy></el-image>
        </div>
        <el-image style="width:100%;" :style="{marginTop:'80px'}"  :src="imgurl[79]" :preview-src-list="imgurl" lazy></el-image>
        <div class="right">
            <el-image style="width: 50%;" :src="imgurl[80]" :preview-src-list="imgurl" lazy></el-image>
        </div>
      </div>
        
      </div>
      <div class="backtop" @click="toTop()">
        <img src="~@/assets/gotop.png" alt="">
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
      require('@/assets/works/w15.jpg'),
      require('@/assets/works/w16.jpg'),
      require('@/assets/works/w17.jpg'),
      require('@/assets/works/w18.jpg'),
      require('@/assets/works/w19.jpg'),
      require('@/assets/works/w20.jpg'),
      require('@/assets/works/w21.jpg'),
      require('@/assets/works/w22.jpg'),
      require('@/assets/works/w23.jpg'),
      require('@/assets/works/w24.jpg'),
      require('@/assets/works/w25.jpg'),
      require('@/assets/works/w26.jpg'),
      require('@/assets/works/w27.jpg'),
      require('@/assets/works/w28.jpg'),
      require('@/assets/works/w29.jpg'),
      require('@/assets/works/w30.jpg'),
      require('@/assets/works/w31.jpg'),
      require('@/assets/works/w32.jpg'),
      require('@/assets/works/w33.jpg'),
      require('@/assets/works/w34.jpg'),
      require('@/assets/works/w35.jpg'),
      require('@/assets/works/w36.jpg'),
      require('@/assets/works/w37.jpg'),
      require('@/assets/works/w38.jpg'),
      require('@/assets/works/w39.jpg'),
      require('@/assets/works/w40.jpg'),
      require('@/assets/works/w41.jpg'),
      require('@/assets/works/w42.jpg'),
      require('@/assets/works/w43.jpg'),
      require('@/assets/works/w44.png'),
      require('@/assets/works/w45.jpg'),
      require('@/assets/works/w46.jpg'),
      require('@/assets/works/w47.jpg'),
      require('@/assets/works/w48.jpg'),
      require('@/assets/works/w49.jpg'),
      require('@/assets/works/w50.jpg'),
      require('@/assets/works/w51.jpg'),
      require('@/assets/works/w52.jpg'),
      require('@/assets/works/w53.jpg'),
      require('@/assets/works/w54.jpg'),
      require('@/assets/works/w55.jpg'),
      require('@/assets/works/w56.jpg'),
      require('@/assets/works/w57.jpg'),
      require('@/assets/works/w58.jpg'),
      require('@/assets/works/w59.jpg'),
      require('@/assets/works/w60.jpg'),
      require('@/assets/works/w61.jpg'),
      require('@/assets/works/w62.jpg'),
      require('@/assets/works/w63.jpg'),
      require('@/assets/works/w64.png'),
      require('@/assets/works/w65.jpg'),
      require('@/assets/works/w66.jpg'),
      require('@/assets/works/w67.jpg'),
      require('@/assets/works/w68.jpg'),
      require('@/assets/works/w69.jpg'),
      require('@/assets/works/w70.jpg'),
      require('@/assets/works/w71.png'),
      require('@/assets/works/w71.jpg'),
      require('@/assets/works/w72.jpg'),
      require('@/assets/works/w73.jpg'),
      require('@/assets/works/w74.jpg'),
      require('@/assets/works/w75.jpg'),
      require('@/assets/works/w76.jpg'),
      require('@/assets/works/w77.jpg'),
      require('@/assets/works/w78.jpg'),
      require('@/assets/works/w79.jpg'),
      require('@/assets/works/w80.jpg'),

      ]
    };
  },
  methods: {
    toTop() {
      const appDom = document.getElementById("main");
      appDom.scrollTo({
        top: 0,
        // top:appDom.scrollHeight,
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
.threeimg{
  display: flex;
  margin-top: 80px;
  position: relative;
  .threeimgleft{
    width: 50%;
    display: flex;
    justify-content: space-between;
    .el-image{
      margin-top: 20px;
    }
    div{
      width: 48%;
      display: flex;
      flex-direction: column;
      .el-image{
        height: 150px;
        margin-top: 20px;
      }
    }
  }
  .threeimgright{
    width: 48%;
    position: absolute;
    right: 0;
    .el-image{
      margin-top: 20px;
    }
  }
}
.left{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
.speimg3{
  display: flex;
  justify-content: space-between;
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
    padding-bottom: 80px;
    div{
      display: flex;
    }
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
    img{
      width: 50px;
      height: 80px;
    }
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
