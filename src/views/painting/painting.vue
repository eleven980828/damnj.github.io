<template>
  <div class="main" id="main">

    <div class="outLine">
      <div class="title">
        <p>· Antto 安童 ·</p>
        <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
        <i @click="$goback()" class="el-icon-arrow-left"></i>
      </div>
      
      <div class="midbut">
        <span>画</span>
      </div>
       <div class="backtop" @click="toTop()">
        <i class="el-icon-top"></i>
      </div>
      <div class="lazyimg">
        <el-image  v-for="(item,index) in list" :key="index" :src='item.url' :style="{width:item.width,marginBottom:item.bottom}" lazy></el-image>
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
  name: 'APP',
  data() {
    return {
      list:[
        {url:require('@/assets/painting1.png'),width:'80%',bottom:'20px'},
        {url:require('@/assets/painting/p1.jpg'),width:'60%',bottom:'30px'},
        {url:require('@/assets/painting/p2.jpg'),width:'100%',bottom:'20px'},
        {url:require('@/assets/painting/p3.jpg'),width:'55%',bottom:'20px'},
        {url:require('@/assets/painting/p4.jpg'),width:'90%',bottom:'20px'},
        {url:require('@/assets/painting/p5.jpg'),width:'90%',bottom:'20px'},
        {url:require('@/assets/painting/p6.jpg'),width:'60%',bottom:'40px'},
        {url:require('@/assets/painting/p7.jpg'),width:'85%',bottom:'80px'},
        {url:require('@/assets/painting/p8.jpg'),width:'85%',bottom:'20px'},
        {url:require('@/assets/painting/p9.jpg'),width:'85%',bottom:'20px'},
        {url:require('@/assets/painting/p10.jpg'),width:'85%',bottom:'20px'},
        {url:require('@/assets/painting/p11.jpg'),width:'85%',bottom:'20px'},
        {url:require('@/assets/painting/p12.jpg'),width:'85%',bottom:'60px'},
        {url:require('@/assets/painting/p13.jpg'),width:'85%',bottom:'100px'},
        {url:require('@/assets/painting/p14.jpg'),width:'50%',bottom:'100px'},
        {url:require('@/assets/painting/p15.jpg'),width:'100%',bottom:'20px'},
        {url:require('@/assets/painting/p16.jpg'),width:'85%',bottom:'30px'},
        {url:require('@/assets/painting/p17.jpg'),width:'100%',bottom:'100px'},
        // require('@/assets/painting/p3.jpg'),
        // require('@/assets/painting/p4.jpg'),
        // require('@/assets/painting/p5.jpg'),
        // require('@/assets/painting/p6.jpg'),
        // require('@/assets/painting/p7.jpg'),
        // require('@/assets/painting/p8.jpg'),
        // require('@/assets/painting/p9.jpg'),
        // require('@/assets/painting/p10.jpg'),
        // require('@/assets/painting/p11.jpg'),
        // require('@/assets/painting/p12.jpg'),
        // require('@/assets/painting/p13.jpg'),
        // require('@/assets/painting/p14.jpg'),
        // require('@/assets/painting/p15.jpg'),
        // require('@/assets/painting/p16.jpg'),
        // require('@/assets/painting/p17.jpg'),
      ]
    }
  },
  methods: {
    toTop(){
      const appDom = document.getElementById('main')
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
  max-height: 100vh;
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
  .lazyimg{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    .el-image{
      min-height: 50px;
      display: block;
      margin: 0 auto;
    }
  }
  
  .homebg{
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-bottom: 50px;
    text-align: center;
    img{
      width: 80%;
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
    position: relative;

    p {
      font-size: 12px;
      color: @basecolor;
    }
    i{
      position: absolute;
      top: 50%;
      margin-top: -15px;
      left: 20px;
      color: @fontcolor;
      font-size: 40px;
    }
  }

}</style>
