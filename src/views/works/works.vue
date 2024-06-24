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
          <span>插画作品</span>
          <!-- <span>works</span> -->
        </div>
        <p>更多作品更新，请跳转至 <a href="https://instagram.com/anttoxaxa?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">Instagram </a> 或 <a href="https://www.xiaohongshu.com/user/profile/5fc3b0680000000001000040?xhsshare=CopyLink&appuid=5fc3b0680000000001000040&apptime=1696686102">小红书</a> 进行浏览</p>
        <p>For more works,please jump to <a href="https://instagram.com/anttoxaxa?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">lnstagram</a>.</p>
        <div class="antoo">
          <img src="~@/assets/per/planting.jpg" alt="">
          <!-- <div class="tipsfont">
            <span>
              <p>安童</p>
              <p>ANTTO</p>
            </span>
          </div> -->
        </div>
        <!-- <div class="video">
          <video src="~@/assets/introduce.mp4" controls webkit-playsinline playsinline poster="~@/assets/videoBg.png"></video>
        </div> -->
    
        
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
      require('@/assets/works/new2024-3-30.jpg'),
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
    padding-top: 70px;
    text-align: center;

    .works {
            width: 175px;
            font-size: 35px;
            height: 80px;
            box-sizing: border-box;
            color: white;
            margin: 0 auto;
            border: 5px solid @fontcolor;
            line-height: 75px;
            box-sizing: border-box;
            margin-bottom: 110px;
            span{
              color: @fontcolor;  
              font-size: 25px;
              margin-left: 10px;
              display: block;
              letter-spacing: 10px;
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
}</style>
