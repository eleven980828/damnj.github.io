<template>
  <div class="main">
    <div class="outLine">
      <div class="title">
        <p>· Antto 安童 ·</p>
        <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
        <i @click="$goback()" class="el-icon-arrow-left"></i>
      </div>
      <div class="bookingbut">預訂</div>
      <div class="tips">
        < 请填写以下文身设计所需信息后，在微信与我私信沟通。>
      </div>

      <div class="inpmain">
        <div>
          <p>题材：</p><input type="text">
        </div>
        <div>
          <p>部位：</p><input type="text">
        </div>
        <div>
          <p>年龄：</p><input type="text">
        </div>
        <div>
          <p>身高：</p><input type="text">
        </div>
        <div>
          <p>体重：</p><input type="text">
        </div>
        <div>
          <p>称呼：</p><input type="text">
        </div>
        <div>
          <p>有无心脏病：</p>
          <p>是</p>
          <p>/</p>
          <p>否</p>
        </div>
        <div>
          <p>需要预订周末时间：</p>
          <p>是</p>
          <p>/</p>
          <p>否</p>
        </div>
        <div>
          <p>其他要求(选填)：</p>
        </div>
        <div>
          <div>
            <textarea cols="3"></textarea>
            <span></span>
            <span></span>
            <span></span>
          </div> 
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
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

  .inpmain {
    width: 93%;
    margin: 0 auto;
    margin-top: 100px;

    div {
      display: flex;
      margin-top: 20px;
      div{
        width: 100%;
        position: relative;
        span{
          position: absolute;
          width: 100%;
          top: 38px;
          display: block;
          border-bottom: 1px solid @fontcolor;
          &:nth-child(2){
            top: 73px;
          }
          &:nth-child(3){
            top: 113px;
          }
        }
      }
      textarea {
        width: 100%;
        font-size: 25px;
        resize: none;
        line-height: 40px;
        height: 115px;
        background-color: transparent;
        overflow: hidden;
        border: none;
        border-radius: 0;
      }

      p {
        font-size: 25px;

        &:nth-child(3) {
          margin: 0 10px;
          font-size: 30px;
        }
      }

      input {
        flex: 1;
        background-color: transparent;
        border-bottom: 1px solid @fontcolor;
        font-size: 25px;
        border-radius: 0;
      }
    }
  }

  .tips {
    text-align: center;
    font-size: 25px;
    margin-top: 80px;
  }

  .bookingbut {
    width: 200px;
    font-size: 35px;
    height: 100px;
    box-sizing: border-box;
    color: white;
    margin: 0 auto;
    border: 5px solid @basecolor;
    line-height: 95px;
    margin-top: 80px;

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
}</style>