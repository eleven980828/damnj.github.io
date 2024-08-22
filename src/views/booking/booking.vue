<template>
  <div>
  <NAV></NAV>
  <div class="main" v-show="$lang()">
    <img src="@/assets/home/foot4.jpg" alt="" class="topimg" />
    <div class="title">纹身预订</div>
    <p class="tips">*您好，感谢您的预订。</p>
    <p class="tips">
      您所见的所有纹身均为现场设计没有手稿提供(根据承载者的身体结构进行手绘)感谢信任收费标准为1500人民币/小时，预订需要支付定金3000元。<br />(外出驻店工作增加20%费用)
    </p>
    <select name="area" id="" class="sele">
      <option value="none" selected disabled hidden>选择预约地点</option>
    </select>
    <div class="inp">
      <p>解释您的想法:</p>
      <input type="text" v-model="mode">
      <p>部位:</p>
      <input type="text"  v-model="location">
      <div class="four">
        <div>
          <p>身高(cm):</p>
          <input type="text"  v-model="high">
        </div>
        <div>
          <p>体重(kg):</p>
          <input type="number"  v-model="weight">
        </div>
        <div>
          <p>称呼:</p>
          <input type="text"  v-model="name">
        </div>
        <div>
          <p>年龄:</p>
          <input type="text"  v-model="age">
        </div>
      </div>
      <p>有无心脏病？</p>
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
      <p>其他要求(选填)</p>
      <textarea name="" id=""  v-model="tips"></textarea>
      <p>微信:</p>
      <input type="text"  v-model="social">
      <p>邮箱:</p>
      <input type="text" v-model="mail">
      <p>注*</p>
      <p>定金用作预订时间和名额，支付后不予退回。<br>因不可抗力因素，造成预约时间需要调整，定金不会作废。<br>请即时沟通，延后至完成作品。</p>
      <div class="sub">确认无误,发送至邮件订阅</div>
    </div>
    
  </div>

  
  <div class="main enmain" v-show="!$lang()">
    <img src="@/assets/home/foot4.jpg" alt="" class="topimg" />
    <div class="title">TATTOO BOOKING</div>
    <p class="tips">·Hello, thank you for your reservation·</p>
    <p class="tips">
      All tattoos you see are designed by freehand and no manuscript is provided (design basedon human body structure )Thanks for your trust ! The price is RMB 1,500/hour,and a deposit of RMB 3,000 is required for booking.
    </p>
    <span>(BASED IN GUANGZHOU CITY,CHINA Working in another cities adds 20% to the cost)</span>
    <select name="area" id="" class="sele">
      <option value="none" selected disabled hidden>Select appointment location</option>
    </select>
    <div class="inp">
      <p>explain your idea:</p>
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
      <p>Other requirements (optional):</p>
      <textarea name="" id="" v-model="tips"></textarea>
      <p>Instagram:</p>
      <input type="text" v-model="social">
      <p>Email:</p>
      <input type="text" v-model="mail">
      <p>ATTENTION PLEASE*</p>
      <p><br><br>The deposit is used to reserve time and places, and is non-refundable after payment.<br><br>The deposit is used to reserve time and places, and is non-refundable after payment.<br><br>Please communicateimmediately and postpone it until thework is completed.</p>
      <div class="sub">Confirmed, send to emai to subscribe</div>
    </div>
    
  </div>
</div>

</template>
    <script>
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
      }
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
  .topimg {
    width: 300px;
    height: 210px;
    margin: 0 auto;
    display: block;
    margin-top: 50px;
  }
  span{
    margin-top: 50px;
    margin-bottom: 50px;
      font-size: 23px;
      display: block;
    }
  .title {
    text-align: center;
    font-size: 36px;
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
      margin-top: 150px;
      font-size: 28px;
      border: 8px solid black;
      border-radius: 0%;
      border-right:8px solid black ;
      border-left:8px solid black ;
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
      border-right:8px solid black ;
      border-left:8px solid black ;
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
      margin-top: 100px;
      font-size: 25px;
    }
    &:nth-of-type(7){
      margin-bottom: 10px;
      margin-top: 10px;
      font-size: 25px;
    }
    &:nth-of-type(8){
      margin-top: 120px;
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
      border-right:8px solid black ;
      border-left:8px solid black ;
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
</style>
    