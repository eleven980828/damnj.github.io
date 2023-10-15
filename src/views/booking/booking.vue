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

      <div class="inpmain" ref="inputmain" id="inputmain">
        <div>
          <p>题材：</p><input type="text" v-model="mode">
        </div>
        <div>
          <p>部位：</p><input type="text" v-model="location">
        </div>
        <div>
          <p>年龄：</p><input type="text" v-model="age">
        </div>
        <div>
          <p>身高：</p><input type="text" v-model="high">
        </div>
        <div>
          <p>体重：</p><input type="text" v-model="weight">
        </div>
        <div>
          <p>称呼：</p><input type="text" v-model="name">
        </div>
        <div>
          <p>有无心脏病：</p>
          <p :class="isCardiopathy ? 'und' : 'no'" @click="isCardiopathy=true">是</p>
          <p>/</p>
          <p  :class="isCardiopathy ? 'no' : 'und'" @click="isCardiopathy=false">否</p>
        </div>
        <div>
          <p>需要预订周末时间：</p>
          <p  :class="week ? 'und' : 'no'" @click="week=true">是</p>
          <p>/</p>
          <p  :class="week ? 'no' : 'und'" @click="week=false">否</p>
        </div>
        <div>
          <p>其他要求(选填)：</p>
        </div>
        <div>
          <div>
            <textarea cols="3"  v-model="tips"></textarea>
            <span></span>
            <span></span>
            <span></span>
          </div> 
        </div>
        <div class="testhidd" id="testhidd">
        <p>2131231</p>
      </div>
      </div>
      <div class="copybut needsclick" @click="copy()" >填写完成，点击复制后，回到微信进行沟通。</div>
      <van-popup v-model="show"><el-image class="popup" :src="imGurl"></el-image></van-popup>
     
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  data(){
    return{
      mode:"",
      location:"",
      age:"",
      high:"",
      weight:"",
      name:"",
      isCardiopathy:false,
      week:false,
      tips:"",
      imGurl:"",
      show:false
    } 
  },
  mounted(){
  },
  methods: {
    copy(){
      // if(!this.mode){
      //   this.$message('请填写题材')
      //   return
      // }
      // if(!this.location){
      //   this.$message('请填写部位')
      //   return
      // }
      // if(!this.age){
      //   this.$message('请填写年龄')
      //   return
      // }
      // if(!this.high){
      //   this.$message('请填写身高')
      //   return
      // }
      // if(!this.weight){
      //   this.$message('请填写体重')
      //   return
      // }
      // if(!this.name){
      //   this.$message('请填写称呼')
      //   return
      // }
      const el=document.getElementById('testhidd')
      console.log(el.getBoundingClientRect())

      html2canvas(el,{
        allowTaint: true,
        width: el.offsetWidth-18,
        height: el.offsetHeight,
        // x:el.getBoundingClientRect().left-14
      }).then(canvas=>{
        this.imGurl=canvas.toDataURL('image/png')
      })
      this.show=true
      
      // const node='题材：'+this.mode+'\n'+'部位：'+this.location+'\n'+'年龄：'+this.age+'\n'+'身高：'+this.high+'\n'+'体重：'+this.weight+'\n'+'称呼：'+this.name+'\n'+'有无心脏病：'+(this.isCardiopathy ? '是' : '否')+'\n'
      // const that=this
    },
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

/deep/.van-popup{
  background-color: black;
}
.main {
  
  width: 750px;
  text-align: center;
  color: @fontcolor;
  .popup{
    width: 600px;
    height: auto;
    background-color: black;
  }
  .und{
    text-decoration: underline;
    color: @basecolor;
  }
  .no{
    color: grey;
  }
  .copybut{
    display: inline-block;
    border: 2px solid white;
    font-size: 25px;
    padding: 10px 15px 10px 15px;
    line-height: 50px;
    width: auto;
    margin-top: 80px;
    
  }
  .inpmain {
    width: 93%;
    margin: 0 auto;
    background-color: black;
    margin-top: 100px;
    position: relative;
    .testhidd{
      width: 100%;
      height: 200px;
      position: absolute;
      z-index: -50;
      background-color: aqua;
    }
    div {
      display: flex;
      margin-top: 20px;
      padding-right: 2px;
      div{
        width: 100%;
        position: relative;
        margin-top: 0;
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
        line-height: 25px;
        color: @fontcolor;
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