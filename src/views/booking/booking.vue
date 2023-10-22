<template>
  <div class="main">
    <div class="outLine">
      <div class="title">
        <p>· Antto 安童 ·</p>
        <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
        <i @click="$goback()" class="el-icon-arrow-left"></i>
      </div>
      <div class="bookingbut">{{ ty === 'zh' ? '预订' : 'BOOKING' }}</div>


      <div class="whitebg" v-if="ty === 'zh'">
        <span>您好，感谢您的预订。</span>
        <span>为保障文身设计的基础条件,<br />请填写以下信息:</span>
        <p>题材：</p>
        <input type="text" v-model="mode">
        <p>部位：</p>
        <input type="text" v-model="location">
        <div class="fourdiv">
          <div>
            <p>身高(cm):</p><input type="number" v-model="high">
          </div>
          <div>
            <p>体重(kg):</p><input type="number" v-model="weight">
          </div>
          <div>
            <p>称呼:</p><input type="text" v-model="name">
          </div>
          <div>
            <p>年龄:</p><input type="number" v-model="age">
          </div>
        </div>
        <p>有无心脏病:</p>
        <div class="radio">
          <i :style="{ backgroundColor: isCardiopathy ? 'black' : 'transparent' }" @click="isCardiopathy = true"></i>
          <p>是</p>
        </div>
        <div class="radio mb">
          <i :style="{ backgroundColor: isCardiopathy ? 'transparent' : 'black' }" @click="isCardiopathy = false"></i>
          <p>否</p>
        </div>
        <p>需要预订周末时间:</p>
        <div class="radio">
          <i :style="{ backgroundColor: week ? 'black' : 'transparent' }" @click="week = true"></i>
          <p>是</p>
        </div>
        <div class="radio mb">
          <i :style="{ backgroundColor: week ? 'transparent' : 'black' }" @click="week = false"></i>
          <p>否</p>
        </div>
        <p>其他要求(选填):</p>
        <textarea name="" id="" cols="30" rows="10" v-model="tips"></textarea>
        <p>微信：</p>
        <input type="text" v-model="social">
        <div class="copybut needsclick"  @click="issend ? sent() : ensure()">{{ issend ? '已发送，请您耐心等待。' : '确认无误，发送至邮件预订。' }}</div>
      </div>

      <div class="whitebg" v-if="ty === 'en'">
        <span>Hello, thank you for your reservation.</span>
        <span>In order to ensure the basic conditions of tattoo design,<br />Please fill in the following
          information:</span>
        <p>Subject Matter:</p>
        <input type="text" v-model="mode">
        <p>Body part:</p>
        <input type="text" v-model="location">
        <div class="fourdiv">
          <div>
            <p>Height (cm):</p><input type="number" v-model="high">
          </div>
          <div>
            <p>Weight (kg):</p><input type="number" v-model="weight">
          </div>
          <div>
            <p>Name:</p><input type="text" v-model="name">
          </div>
          <div>
            <p>Age:</p><input type="number" v-model="age">
          </div>
        </div>
        <p>Have heart disease:</p>
        <div class="radio">
          <i :style="{ backgroundColor: isCardiopathy ? 'black' : 'transparent' }" @click="isCardiopathy = true"></i>
          <p>Yes</p>
        </div>
        <div class="radio mb">
          <i :style="{ backgroundColor: isCardiopathy ? 'transparent' : 'black' }" @click="isCardiopathy = false"></i>
          <p>No</p>
        </div>
        <p>Need to book weekend time:</p>
        <div class="radio">
          <i :style="{ backgroundColor: week ? 'black' : 'transparent' }" @click="week = true"></i>
          <p>Yes</p>
        </div>
        <div class="radio mb">
          <i :style="{ backgroundColor: week ? 'transparent' : 'black' }" @click="week = false"></i>
          <p>No</p>
        </div>
        <p>Other requirements (optional):</p>
        <textarea name="" id="" cols="30" rows="10" v-model="tips"></textarea>
        <p>Instagram:</p>
        <input type="text" v-model="social">
        <div class="copybut needsclick"  @click="issend ? sent() : ensure()">{{ issend ? 'It has been sent. Please wait patiently.' : 'Confirm and send to email booking.' }}</div>
      </div>

      <van-popup v-model="show" v-if="ty === 'zh'">
        <div class="fill">
            <h3>填写成功</h3>
            <p>请确保您预留的社交账号可以联系到您<br />我会在24小时内回复</p>
            <span @click="show=false">填写有误，返回修改。</span>
            <span @click="issend ? '' : sendemil()">{{issend ? '已发送' : '确认发送' }}</span>
        </div>
      </van-popup>

      <van-popup v-model="show" v-if="ty === 'en'">
        <div class="fill en">
          <h3>Fill in successfully</h3>
          <p>Make sure you can be reached by the social<br />media account you have set up<br />'ll respond within 24
            hours</p>
          <span @click="show=false">This parameter is incorrect. Return to modify it.</span>
          <span @click="issend ? '' : sendemil()">{{issend ? 'has been sent ' : 'Confirm sending' }}</span>
        </div>
      </van-popup>

    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import emailjs from 'emailjs-com'
import '../../utils/smtp.js'
export default {
  created() {
    this.ty = this.$route.params.ty ? this.$route.params.ty : 'zh'
    console.log(emailjs)
  },
  data() {
    return {
      mode: "",
      location: "",
      age: "",
      high: "",
      weight: "",
      name: "",
      isCardiopathy: false,
      week: false,
      tips: "",
      social: '',
      imGurl: "",
      show: false,
      radio: 1,
      ty: 'zh',
      issend:false
    }
  },
  mounted() {
    const checktime=localStorage.getItem('time')
      if(checktime){
        const nowtime=new Date().getTime()
        if(checktime>nowtime){
          this.issend=true
          return
        }
      }
  },
  methods: {
    sent(){
      this.$message.error(this.ty==='zh' ? '已经发送，请耐心等待' : 'It has been sent. Please be patient')
    },
    copy() {
      
      const el = document.getElementById('testhidd')
      console.log(el.getBoundingClientRect())

      html2canvas(el, {
        allowTaint: true,
        width: el.offsetWidth - 18,
        height: el.offsetHeight,
        // x:el.getBoundingClientRect().left-14
      }).then(canvas => {
        this.imGurl = canvas.toDataURL('image/png')
      })
      this.show = true

      // const node='题材：'+this.mode+'\n'+'部位：'+this.location+'\n'+'年龄：'+this.age+'\n'+'身高：'+this.high+'\n'+'体重：'+this.weight+'\n'+'称呼：'+this.name+'\n'+'有无心脏病：'+(this.isCardiopathy ? '是' : '否')+'\n'
      // const that=this
    },
    toTop() {
      const appDom = document.getElementById('app');
      appDom.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    ensure() {
      if(!this.mode){
        this.$message(this.ty==='zh' ? '请填写题材' : 'Please fill in the subject matter')
        return
      }
      if(!this.location){
        this.$message(this.ty==='zh' ? '请填写部位' : 'Please fill in the location')
        return
      }
      if(!this.high){
        this.$message(this.ty==='zh' ? '请填写身高' : 'Please fill in the height')
        return
      }
      if(!this.weight){
        this.$message(this.ty==='zh' ? '请填写体重' : 'Please fill in the weight')
        return
      }
      if(!this.name){
        this.$message(this.ty==='zh' ? '请填写称呼' : 'Please fill in your name')
        return
      }
      if(!this.age){
        this.$message(this.ty==='zh' ? '请填写年龄' : 'Please fill in the age')
        return
      }
      if(!this.social){ 
        this.$message(this.ty==='zh' ? '请填写微信' : 'Please fill in your Instagram account')
        return
      }
      this.show=true
    },
    sendemil(){
      
      const checktime=localStorage.getItem('time')
      if(checktime){
        const nowtime=new Date().getTime()
        if(checktime>nowtime){
          this.$message(this.ty==='zh' ? '您已提交过，请稍后再试' : 'You have already submitted it. Please try again later')
          return
        }
      }
      emailjs.send('service_tzq4tgc', 'template_z163sbe', {name:this.name,mode:this.mode,location:this.location,high:this.high,weight:this.weight,age:this.age,isCardiopathy:this.isCardiopathy ? '是' : '否',week:this.week ? '是' : '否',tips:this.tips,social:this.ty==='zh' ? '微信:'+this.social : 'Instagram:'+this.social},'efGrq8haGJ6-tGyBS').then((res) => {
        this.show=false
        this.$message.success(this.ty==='zh' ? '发送成功！' : 'Successfully sent!')
        const time=new Date().getTime()+86400000
        localStorage.setItem('time',time)
        this.issend=true
      }, (errpr) => {
        console.log(errpr)
        this.$message.error(this.ty==='zh' ? '发送失败,请稍后再试' : 'Failed to send, please try again later')
      })
    }
  }
}
</script>

<style lang='less' scoped>
@basecolor: #cfcfcf;
@fontcolor: #aaaaaa;

/deep/.van-popup {
  background-color: black;
}

.fill {
  width: 90vw;
  height: 900px;
  color: white;
  padding-top: 170px;
  background-color: black;
  border: 1px solid white;

  h3 {
    font-size: 35px;
    font-weight: normal;
    margin-bottom: 60px;
  }

  p {
    font-size: 20px;
    margin-bottom: 200px;
  }

  span {
    margin: 0 auto;
    width: 50%;
    display: block;
    height: 40px;
    color: black;
    margin-bottom: 60px;
    line-height: 40px;
    background-color: white;
    font-size: 20px;
  }

  input {
    // visibility: hidden;
    visibility: visible;
      margin: 0 auto;
      width: 50%;
      display: block;
      height: 40px;
      color: black;
      margin-bottom: 30px;
      line-height: 40px;
      background-color: white;
      font-size: 20px;

    &:last-of-type {
      visibility: visible;
      margin: 0 auto;
      width: 50%;
      display: block;
      height: 40px;
      color: black;
      margin-bottom: 30px;
      line-height: 40px;
      background-color: white;
      font-size: 20px;
    }
  }
}

.en {
  span {
    width: 70% !important;
  }
}

.main {
  text-align: start;

  .mb {
    margin-bottom: 40px;
  }

  .radio {
    display: flex;
    align-items: center;

    .black {
      background-color: black;
    }

    i {
      border-radius: 50%;
      border: 1px solid black;
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }

    p {
      display: inline-block;
      font-size: 25px;
    }
  }

  .whitebg {
    width: 90%;
    background-color: white;
    margin: 0 auto;
    color: black;
    padding: 50px 60px 30px 60px;
    margin-top: 60px;
    margin-bottom: 60px;
    font-size: 23px;

    textarea {
      width: 100%;
      border-radius: 0;
      resize: none;
      height: 150px;
      border: 1px solid black;
    }

    .fourdiv {
      display: flex;
      justify-content: space-between;

      div {
        width: 24%;

        p {
          text-align: start;
          white-space: nowrap;
        }
      }

    }

    span {
      display: block;
      width: 100%;
      text-align: start;
      margin-bottom: 30px;
    }

    >p {
      text-align: start;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      height: 50px;
      margin-bottom: 10px;
      border-radius: 0;
      border: 1px solid black;
    }
  }

  width: 750px;
  text-align: center;
  color: @fontcolor;

  .popup {
    width: 600px;
    height: auto;
    background-color: black;
  }

  .und {
    text-decoration: underline;
    color: @basecolor;
  }

  .no {
    color: grey;
  }

  .copybut {
    display: inline-block;
    color: white;
    font-size: 25px;
    background-color: black;
    padding: 10px 30px 10px 30px;
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

    .testhidd {
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

      div {
        width: 100%;
        position: relative;
        margin-top: 0;

        span {
          position: absolute;
          width: 100%;
          top: 38px;
          display: block;
          border-bottom: 1px solid @fontcolor;

          &:nth-child(2) {
            top: 73px;
          }

          &:nth-child(3) {
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
    font-size: 30px;
  }
}</style>