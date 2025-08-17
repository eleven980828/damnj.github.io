<template>
  <div>
  <NAV></NAV>
  <div class="main" v-show="$lang()">
    <img src="@/assets/home/foot4.jpg" alt="" class="topimg" />
    <div class="title">纹身预订</div>
    <p class="tips">·您好，感谢您的预约·</p>
    <p class="tips">
      您看到的所有纹身均为手绘设计(依据人体结构进行设计)，感谢您的信任!
    </p>
    <p class="tips">
      价格</br>
      每小时1500元人民币</br>
      预约需缴纳3000元人民币定金。
    </p>
    <span class="downline">(工作室位于中国广州市，若在国外工作，需额外收取20%的费用)</span>
    <p class="tips nomr">为了了解您的需求，请填写以下信息(这有助于我设计纹身):</p>
    <select name="area" id="" class="sele" v-model="area">
      <option value="" selected disabled hidden>选择预约地点</option>
      <option v-for="(item, index) in $store.state.trip" :key="index" :value="item.years + ' ' + item.area">
        {{ $lang() ? item.zh : item.en }}
      </option>
    </select>
    <div class="inp">
      <p>1. 详细说明您的想法和特殊要求</p>
      <input type="text" v-model="mode">
      <p>2. 部位</p>
      <input type="text" v-model="location">
      <div class="four">
        <div>
          <p>身高(厘米):</p>
          <input type="text" v-model="high">
        </div>
        <div>
          <p>体重(千克):</p>
          <input type="number" v-model="weight">
        </div>
        <div>
          <p>姓名:</p>
          <input type="text" v-model="name">
        </div>
        <div>
          <p>年龄:</p>
          <input type="text" v-model="age">
        </div>
      </div>
      <p>是否有心脏病?</p>
      <div class="radio">
        <i :style="{ backgroundColor: isCardiopathy ? 'black' : 'transparent' }" @click="isCardiopathy = true"></i>
        <p>是</p>
      </div>
      <div class="radio">
        <i :style="{ backgroundColor: isCardiopathy ? 'transparent' : 'black' }" @click="isCardiopathy = false"></i>
        <p>否</p>
      </div>
      <p>是否需要预定周末时间？</p>
      <div class="radio">
        <i :style="{ backgroundColor: week ? 'black' : 'transparent' }" @click="week = true"></i>
        <p>是</p>
      </div>
      <div class="radio">
        <i :style="{ backgroundColor: week ? 'transparent' : 'black' }" @click="week = false"></i>
        <p>否</p>
      </div>
      <p>微信:</p>
      <div class="socailacss">
        <input type="text" v-model="social" class="socailacss">
      </div>
      <p>邮箱:</p>
      <div class="socailacss">
        <input type="text" v-model="mail" class="socailacss">
      </div>
      <p>* 收到邮件后，我会联系您支付押金并确认日期。</p>
      <p>请注意*</p>
      <div class="outline">
        <p>定金用于预留时间和场地，支付后不予退还。<br><br>若因不可抗力需要调整预约时间，定金不会作废。<br><br>如果您需要更改日期，请及时沟通并选择新日期。</p>
      </div>
      <div class="sub"  @click="sendemil">确认无误，发送邮件预约</div>
    </div>
    
  </div>

  
  <div class="main enmain" v-show="!$lang()">
    <img src="@/assets/home/foot4.jpg" alt="" class="topimg" />
    <div class="title">TATTOO BOOKING</div>
    <p class="tips">·Hello, thank you for your reservation·</p>
    <p class="tips">
      All tattoos you see are designed by freehand (design basedon human body structure )Thanks for your trust !
    </p>
    <p class="tips">
      Price</br>
      RMB 1,500/hour</br>
      deposit RMB 3,000 for booking.
    </p>
    <span class="downline">(BASED IN GUANGZHOU CITY,CHINA </br>Working abroad need 20% extra fee)</span>
    <p class="tips nomr">In order to understand your needs,please fill in the followinginformations: (it helps me design the tattoo)</p>
    <select name="area" id="" class="sele" v-model="area">
      <option value="" selected disabled hidden>Select appointment location</option>
      <option v-for="(item, index) in $store.state.trip" :key="index" :value="item.years + ' ' + item.zh">
        {{ item.en }}
      </option>
    </select>
    <div class="inp">
      <p>1. Explain your idea and special requests in detail</p>
      <input type="text" v-model="mode">
      <p>Body part:</p>
      <input type="text" v-model="location">
      <div class="four">
        <div>
          <p>Height(cm):</p>
          <input type="text" v-model="high">
        </div>
        <div>
          <p>Weight(kg):</p>
          <input type="number" v-model="weight">
        </div>
        <div>
          <p>Name:</p>
          <input type="text" v-model="name">
        </div>
        <div>
          <p>Age:</p>
          <input type="text" v-model="age">
        </div>
      </div>
      <p>Have heart disease？</p>
      <div class="radio">
        <i :style="{ backgroundColor: isCardiopathy ? 'black' : 'transparent' }" @click="isCardiopathy = true"></i>
        <p>Yes</p>
      </div>
      <div class="radio">
        <i :style="{ backgroundColor: isCardiopathy ? 'transparent' : 'black' }" @click="isCardiopathy = false"></i>
        <p>No</p>
      </div>
      <p>Need to book weekend time？</p>
      <div class="radio">
        <i :style="{ backgroundColor: week ? 'black' : 'transparent' }" @click="week = true"></i>
        <p>Yes</p>
      </div>
      <div class="radio">
        <i :style="{ backgroundColor: week ? 'transparent' : 'black' }" @click="week = false"></i>
        <p>No</p>
      </div>
      <!-- <p>Other requirements (optional):</p>
      <textarea name="" id="" v-model="tips"></textarea> -->
      <p>Instagram</p>
      <div class="socailacss">
        <input type="text" v-model="social" class="socailacss"></input>
      </div>
      <p>Email:</p>
      <div class="socailacss">
        <input type="text" v-model="mail" class="socailacss">
      </div>
      <p>* I will contact you after receiving the email to pay the deposit and confirm the date.</p>
      <p>ATTENTION PLEASE*</p>
      <div class="outline">
        <p>The deposit is used to reserve time and places, and is non-refundable after payment.<br><br>The deposit is used to reserve time and places, and is non-refundable after payment.<br><br>Please communicateimmediately and postpone it until thework is completed.</p>
      </div>
      <div class="sub" @click="sendemil">Confirmed, send to emai to subscribe</div>
    </div>
    
  </div>
</div>

</template>
    <script>
    import emailjs from "emailjs-com";
    import "../../utils/smtp.js";
    import NAV from "../../components/nav.vue"
export default {
  name: 'APP',
  data() {
    return {
      fileList:'',
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
      issend: false,
      sending: false,
      area:'',
      mail:''
      
    };
  },
  components:{
    NAV,
  },
  mounted() {
    
    this.$nextTick(function () {
      this.isactive = true
    })
  },
  methods: {
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
             ensure() {
         if (!this.mode) {
           this.$message(
             this.$store.state.lang ? "请填写题材" : "Please fill in the subject matter"
           );
           return false;
         }
         if (!this.location) {
           this.$message(
             this.$store.state.lang ? "请填写部位" : "Please fill in the Body part"
           );
           return false;
         }
         if (!this.high) {
           this.$message(
             this.$store.state.lang ? "请填写身高" : "Please fill in the height"
           );
           return false;
         }
         if (!this.weight) {
           this.$message(
             this.$store.state.lang ? "请填写体重" : "Please fill in the weight"
           );
           return false;
         }
         if (!this.name) {
           this.$message(
             this.$store.state.lang ? "请填写称呼" : "Please fill in your name"
           );
           return false;
         }
         if (!this.age) {
           this.$message(
             this.$store.state.lang ? "请填写年龄" : "Please fill in the age"
           );
           return false;
         }
         if (!this.area) {
           this.$message(
             this.$store.state.lang ? "请选择地区" : "Please select a region"
           );
           return false;
         }
         if (!this.social) {
           this.$message(
             this.$store.state.lang
               ? "请填写微信"
               : "Please fill in your Instagram account"
           );
           return false;
         }
         if (!this.mail) {
           this.$message(
             this.$store.state.lang ? "请填写邮箱" : "Please fill in your email"
           );
           return false;
         }
         return true;
       },
      sendemil() {
        // 先进行表单验证
        if (!this.ensure()) {
          return;
        }
        
        this.sending = true;
        const checktime = localStorage.getItem("time");
        if (checktime) {
          const nowtime = new Date().getTime();
                   if (checktime > nowtime) {
           this.$message(
             this.$store.state.lang
               ? "您已提交过，请稍后再试"
               : "You have already submitted it. Please try again later"
           );
           return;
         }
        }
      emailjs
        .send(
          "service_f667nva",
          "template_aojz0rh",
          {
            name: this.name,
            mode: this.mode,
            location: this.location,
            high: this.high,
            weight: this.weight,
            age: this.age,
            isCardiopathy: this.isCardiopathy ? "是" : "否",
            week: this.week ? "是" : "否",
            area: this.area,
                         social:
               this.$store.state.lang
                 ? "微信:" + this.social
                 : "Instagram:" + this.social,
            email: this.mail,
          },
          "DMHndlNOnPDZEAlc2"
        )
                 .then(
           (res) => {
             this.$message.success(
               this.$store.state.lang ? "发送成功！" : "Successfully sent!"
             );
             const time = new Date().getTime() + 86400000;
             localStorage.setItem("time", time);
           },
           (errpr) => {

             console.log(errpr);
             this.$message.error(
               this.$store.state.lang
                 ? "发送失败,请稍后再试"
                 : "Failed to send, please try again later"
             );
           }
         );
    },
  },
  
}
</script>
    <style lang="less" scoped>
/*将默认的select选择框样式清除*/
select {
  appearance: none;
  -moz-appearance: none;
  /* Firefox */
  -webkit-appearance: none;
  /* Safari 和 Chrome */
}

/*清除ie的默认选择框样式清除，隐藏下拉箭头*/
select::-ms-expand {
  display: none;
}
.enmain{
  max-width: 100vw;
  overflow: hidden;
  textarea{
    width: 90% !important;
  }
  input{
    width: 90% !important;
  }
  .inp>.four{
    width: 90% !important;
    div{
      input{
        width: 100% !important;
      }
    }
  }
}
.main {
  width: 100%;
  font-weight: bold;
  padding-left: 50px;
  padding-right: 50px;
  .nomr{
    margin-top: 0px !important;
  }
  .downline{
    padding-bottom: 20px;
    border-bottom: 2px solid black;
  }
  .topimg {
    width: 270px;
    height: 170px;
    margin: 0 auto;
    display: block;
    margin-top: 50px;
  }
  span{
    margin-top: 50px;
    margin-bottom: 20px;
      font-size: 23px;
      display: block;
    }
  .title {
    text-align: center;
    font-size: 33px;
    margin-top: -20px;
  }
  .inp{
    .sub{
      display: inline-block;
      margin: 0 auto;
      white-space: nowrap;
      padding: 13px;
      margin-left: 50%;
      transform: translate(-50%);
      text-align: center;
      margin-top: 100px;
      font-size: 28px;
      border: 2px solid black;
      border-radius: 0%;
      border-right:2px solid black ;
      border-left:2px solid black ;
      margin-bottom: 100px;
    }
    input{
      font-size: 22px;
    }
    textarea{
      width: 80%;
      height: 100px;
      resize: none;
      
      font-size: 22px;
      border: 5px solid black;
      border-radius: 0%;
      border-right:2px solid black ;
      border-left:2px solid black ;
      outline: none;
    }
    
    p{
    text-align: start;
    font-size: 22px;
   
    &:nth-of-type(2){
      margin-top: 20px;
      margin-bottom: 10px;
    }
    &:nth-of-type(3){
      margin-top: 20px;
      margin-bottom: 10px;
    }
    &:nth-of-type(4){
      margin-top: 20px;
      margin-bottom: 10px;
    }
    &:nth-of-type(5){
      margin-top: 20px;
      margin-bottom: 10px;
    }
    &:nth-of-type(6){
      margin-bottom: 10px;
      margin-top: 5px;
      font-size: 25px;
    }
    &:nth-of-type(7){
      margin-bottom: 10px;
      margin-top: 10px;
      font-size: 25px;
    }
    &:nth-of-type(8){
      margin-top: 50px;
    }
    }
    .radio{
      display: flex;
      align-items: center;
      i{
        border-radius: 50%;
        width: 22px;
        height: 22px;
        border: 1px solid black;
        margin-right: 10px;
        display: block;
      }
    }
    input{
      width: 80%;
      height: 50px;
      border: 5px solid black;
      border-radius: 0%;
      border-right:5px solid black ;
      border-left:5px solid black ;
      border-radius: 3px;
      :focus{
        outline: none;
        color: black;
      }
      
    }
    .four{
      display: flex;
      width: 80%;
      justify-content: space-between;
      margin-top: 40px;
      div{
        width: 23%;
        input{
          margin-top: 5px;
          width: 100%;
          border: 5px solid black !important;
        }
      }
    }
  }
  .tips {
    text-align: start;
    font-size: 20px;
    margin-top: 30px;
    &:nth-of-type(1) {
      margin-top: 30px;
    }
  }
  .sele {
    // width: 200px;
    outline: none;
    // appearance: none;
    border: 5px solid black;
    font-weight: bold;
    color: black;
    background-color: white;
    padding: 5px;
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
}
.socailacss{
        width: 400px !important;
      }
.outline{
  border: 5px solid black;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
    