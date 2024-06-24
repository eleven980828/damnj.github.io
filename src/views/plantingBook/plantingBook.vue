<template>
    <div class="main">
      <div class="outLine">
        <div class="title">
          <p>· Antto 安童 ·</p>
          <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
          <i @click="$goback()" class="el-icon-arrow-left"></i>
        </div>
        <!-- <div class="bookingbut">{{ ty === 'zh' ? '预订' : 'BOOKING' }}</div> -->
  
        <div class="midbut">
                  <div class="works">
                      <span>插画预定</span>
                      <!-- <span>works</span> -->
                  </div>
              </div>
  
        <div class="whitebg" v-if="ty === 'zh'">
          <span>您好，感谢您的预订。</span>
          <span>插画设计的费用为:20000元人民币/幅。</span>
          <span>尺幅:80x100cm<br/>材质:仿古熟宣</span>
          <span>注*<br/>插画与文身的载体不同，不一定可以直接用于文身的制作，请勿索要线稿或电子版。</span>
  
          <span>创作用时需要六至九个月，支付全款开始创作，<br />绘画预订不接受修改画稿与退款，请务必考虑充分。</span>
          <span>请填写以下信息用于创作:</span>
          <p>题材：</p>
          <input type="text" v-model="mode">
          <p>其他要求(选填):</p>
          <textarea name="" id="" cols="30" rows="10" v-model="tips"></textarea>
          <p>微信：</p>
          <input type="text" v-model="social">
          <p>邮箱：</p>
          <input type="text" v-model="mail">
          <div class="copybut needsclick" @click="issend ? sent() : ensure()">{{ issend ? '即将开启...' : '确认无误，发送至邮件预订。' }}
          </div>
          <div class="switch" @click="switchLau()">ENGLISH</div>
        </div>
  
        <div class="whitebg" v-if="ty === 'en'">
            <span>The cost of illustration design is: 2000 RMB/piece.</span>
          <span>Size :80x100cm<br/>Material:Chinese art paper </span>
          <span>*<br/> Illustration and tattoo carrier is different, may not be directly used for tattoo production, please do not ask for online manuscript or electronic version.</span>
  
          <span>It takes six to nine months to create, you pay the full amount to start,<br />Painting reservations do not accept revisions and refunds, please be sure to consider them fully.</span>
          <span>Please fill in the following information to create:</span>
          <p>Subject Matter:</p>
          <input type="text" v-model="mode">
          <p>Other requirements (optional):</p>
          <textarea name="" id="" cols="30" rows="10" v-model="tips"></textarea>
          <p>Instagram:</p>
          <input type="text" v-model="social">
          <p>Email:</p>
          <input type="text" v-model="mail">
          <div class="copybut needsclick" @click="issend ? sent() : ensure()">{{ issend ? 'Coming soon...' : 'Confirm and send to email booking.' }}</div>
          <div class="switch" @click="switchLau()">中文</div>
        </div>
  
        <van-popup v-model="show" v-if="ty === 'zh'">
          <div class="fill">
            <h3>填写成功</h3>
            <p>请确保您预留的社交账号可以联系到您<br />我会在24小时内回复</p>
            <span @click="show = false">填写有误，返回修改。</span>
            <span v-show="!sending" @click="issend ? '' : sendemil()">{{ issend ? '已发送' : '确认发送' }}</span>
            <span v-show="sending"><i class="el-icon-loading"></i>正在发送中... </span>
          </div>
        </van-popup>
  
        <van-popup v-model="show" v-if="ty === 'en'">
          <div class="fill en">
            <h3>Fill in successfully</h3>
            <p>Make sure you can be reached by the social<br />media account you have set up<br />'ll respond within 24
              hours</p>
            <span @click="show = false">This parameter is incorrect. Return to modify it.</span>
            <span v-show="!sending" @click="issend ? '' : sendemil()">{{ issend ? 'has been sent ' : 'Confirm sending'
            }}</span>
            <span v-show="sending"><i class="el-icon-loading"></i>Being sent... </span>
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
        issend: true,
        sending: false,
        area:'',
        mail:''
      
      }
    },
    mounted() {
      console.log('this.$store.state.tripsSec')
      const appDom = document.getElementById('app');
      appDom.scrollTo({
          top: 0,
          behavior: 'auto'
        });
      const checktime = localStorage.getItem('time')
      if (checktime) {
        const nowtime = new Date().getTime()
        if (checktime > nowtime) {
          this.issend = true
          return
        }
      }
    },
    methods: {
      switchLau(){
        if(this.ty=='zh'){
          this.ty='en'
        }else{
          this.ty='zh'
        }
      },
      sent() {
        this.$message.error(this.ty === 'zh' ? '即将开启...' : 'coming soon...')
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
        if (!this.mode) {
          this.$message(this.ty === 'zh' ? '请填写题材' : 'Please fill in the subject matter')
          return
        }
        if (!this.location) {
          this.$message(this.ty === 'zh' ? '请填写部位' : 'Please fill in the location')
          return
        }
        if (!this.high) {
          this.$message(this.ty === 'zh' ? '请填写身高' : 'Please fill in the height')
          return
        }
        if (!this.weight) {
          this.$message(this.ty === 'zh' ? '请填写体重' : 'Please fill in the weight')
          return
        }
        if (!this.name) {
          this.$message(this.ty === 'zh' ? '请填写称呼' : 'Please fill in your name')
          return
        }
        if (!this.age) {
          this.$message(this.ty === 'zh' ? '请填写年龄' : 'Please fill in the age')
          return
        }
        if (!this.area) {
          this.$message(this.ty === 'zh' ? '请选择地区' : 'Please select a region')
          return
        }
        if (!this.social) {
          this.$message(this.ty === 'zh' ? '请填写微信' : 'Please fill in your Instagram account')
          return
        }
        
        this.show = true
      },
      sendemil() {
        this.sending = true
        const checktime = localStorage.getItem('time')
        if (checktime) {
          const nowtime = new Date().getTime()
          if (checktime > nowtime) {
            this.$message(this.ty === 'zh' ? '您已提交过，请稍后再试' : 'You have already submitted it. Please try again later')
            return
          }
        }
        emailjs.send('service_tzq4tgc', 'template_z163sbe', { name: this.name, mode: this.mode, location: this.location, high: this.high, weight: this.weight, age: this.age, isCardiopathy: this.isCardiopathy ? '是' : '否', week: this.week ? '是' : '否',area:this.area, tips: this.tips, social: this.ty === 'zh' ? '微信:' + this.social : 'Instagram:' + this.social }, 'efGrq8haGJ6-tGyBS').then((res) => {
          this.show = false
          this.$message.success(this.ty === 'zh' ? '发送成功！' : 'Successfully sent!')
          const time = new Date().getTime() + 86400000
          localStorage.setItem('time', time)
          this.issend = true
          this.sending = false
        }, (errpr) => {
          this.sending = false
          console.log(errpr)
          this.$message.error(this.ty === 'zh' ? '发送失败,请稍后再试' : 'Failed to send, please try again later')
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
  
  .sele{
    width: 100%;
    color: black;
    border-radius: 0px;
    font-size: 25px;
    margin-top: 10px;
    background-color: white;
    border: 1px solid black;
    margin-bottom: 50px;
  }
  .sele:focus{
    outline: none;
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
  
      i {
        font-size: 20px;
        color: black;
      }
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
      position: relative;
      .switch{
              position: absolute;
              display: inline;
              right: 20px;
              top: 20px;
              border: 1px solid black;
              font-size: 18px;
              padding: 4px;
              letter-spacing: normal;
          }
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
        margin-bottom: 50px;
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
  
  .midbut {
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
  </style>