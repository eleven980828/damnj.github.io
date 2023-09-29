<template>
  <div class="main">

    <div class="outLine">
      <div class="title">
        <p>· Antto 安童 ·</p>
        <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
      </div>
      <div class="midbut">
        <span>画</span>
        <span>文身</span>
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
export default {
  name: 'APP',
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
  },
  mounted() {
  },
}
</script>
<style lang="less" scoped>
@basecolor: #cfcfcf;

.main {
  width: 750px;

  .homebg {
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0;

    div {
      width: 100%;
      height: 100%;
      position: relative;
      span{
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
        animation-iteration-count:infinite;
      }
    }

  }
  @keyframes homeBgOp {
    0%{opacity: 0.5;}
    50%{opacity: 0.35;}
    100%{opacity: 0.5;}
  }

  .outLine {
    height: 100vh;
    position: relative;
  }

  .midbut {
    position: absolute;
    top: 30%;
    transform: translate(-50%);
    left: 50%;

    span {
      display: block;
      margin: 0 auto;
      width: 200px;
      height: 50px;
      font-size: 18px;
      color: #aaaaaa;
      margin-bottom: 30px;
      text-align: center;
      line-height: 50px;
      border: 1px solid #aaaaaa;
    }
  }

  .title {
    background-color: #282924;
    padding: 5px 0 5px 0;

    p {
      font-size: 12px;
      color: @basecolor;
    }
  }

}</style>
