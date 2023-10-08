<template>
  <div class="main">

    <div class="outLine">
      <div class="title">
        <p>· Antto 安童 ·</p>
        <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
      </div>
      <div class="midbut">
        <span>画</span>
      </div>
      <div class="homebg">
        <img src="~@/assets/painting1.png" alt="">
        <p>所有作品为2020-2023年阶段创作，均已出售，仅作展示。</p>
        <p>禁止任何抄袭及盗用，违者必究。</p>
        <p>商业合作请联系: 86-17610888007 陈先生</p>
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
    toTop(){
      const appDom = document.getElementById('app')
      appDom.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  created() {
  },
  mounted() {
  },
}
</script>
<style lang="less" scoped>
@basecolor: #cfcfcf;
@fontcolor: #aaaaaa;

.main {
  width: 750px;
  .homebg{
    width: 80%;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    img{
      width: 100%;
      height: auto;
      margin-bottom: 90px;
    }
    p{
      text-align: center;
      font-size: 18px;
      margin-bottom: 30px;
      color: @fontcolor;
    }
  }
  .footIcon {
    background-image: url('~@/assets/homeFooter.jpg');
    width: 60px;
    height: 100px;
    position: relative;
    margin: 80px auto;
    background-size: cover;

    &::after {
      content: '';
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

    span {
      display: block;
      margin: 0 auto;
      width: 260px;
      height: 60px;
      font-size: 30px;
      color: #aaaaaa;
      margin-bottom: 30px;
      text-align: center;
      line-height: 60px;
      margin-top: 80px;
      margin-bottom: 60px;
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
