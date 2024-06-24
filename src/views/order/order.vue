<template>
    <div class="main" id="main" ref="reference">
        <div class="outLine">
            <div class="title">
                <p>· Antto 安童 ·</p>
                <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
                <i @click="$goback()" class="el-icon-arrow-left"></i>
            </div>

            <div class="midbut">
                <div class="works">
                    <span>周边订购</span>
                    <!-- <span>works</span> -->
                </div>
            </div>

            <div class="ordermain" v-if="ty == 'zh'">
                <p>您好，感谢您订购我的周边。</p>
                <span>*注:所有周边，每人限购一份。</span>
                <p>周边：</p>
                <select name="" id="" class="sele" v-model="artwork">
                    <option value="银镯子《云游》 银色 售价:3600元">银镯子《云游》 银色 售价:3600元</option>
                    <option value="银镯子《云游》 乌色(做旧) 售价:3600元">银镯子《云游》 乌色(做旧) 售价:3600元</option>
                </select>
                <p>请支付相应的金额至PayPal: <b @click="copy()">anttop@qq.com</b>(点击复制)</p>
                <p>我们会在收到货款后发货。</p>
                <p>请填写以下信息用作快递服务：</p>
                <p>国家:</p>
                <select name="" id="" class="sele" v-model="selectZH">
                    <option v-for="(item, index) in countryJson.zh" :value="item.value">{{ item.value }}</option>
                </select>
                <p>姓名:</p>
                <input type="text" v-model="name">
                <p>性别:</p>
                <input type="text" v-model="sex">
                <p>具体地址:</p>
                <input type="text" v-model="address">
                <p>邮政编码:</p>
                <input type="number" v-model="code">
                <p>电话:</p>
                <input type="number" v-model="phoneNumber">
                <p>电子邮件:</p>
                <input type="text" v-model="email">
                <div class="ensure" @click="ensure()">确认无误，发送快递信息。</div>

                <div class="switch" @click="ty = 'en'">ENGLISH</div>
            </div>


            <div class="ordermain enspace" v-if="ty == 'en'">
                <p>Hello, thank you for ordering my artwork.</p>
                <span>* Note: All surrounding items are limited to one purchase per person.</span>
                <p>artwork:</p>
                <select name="" id="" class="sele" v-model="artwork">
                    <option value="银镯子《云游》 银色 售价:3600元">Cloud bracelet silver Value:3600RMB</option>
                    <option value="银镯子《云游》 乌色(做旧) 售价:3600元">Cloud bracelet Silver(Make old) Value:3600RMB</option>
                </select>
                <p>Please pay the corresponding amount to PayPal: <b @click="copy()">anttop@qq.com</b> (Click to copy)
                </p>
                <p>We will deliver the goods after we receive the payment.</p>
                <p>Please fill in the following information for express service:</p>
                <p>country:</p>
                <select name="" id="" class="sele" v-model="selectZH">
                    <option v-for="(item, index) in countryJson.en" :value="item.value">{{ item.value }}</option>
                </select>
                <p>name:</p>
                <input type="text" v-model="name">
                <p>gender:</p>
                <input type="text" v-model="sex">
                <p>specific address:</p>
                <input type="text" v-model="address">
                <p>Postal code:</p>
                <input type="number" v-model="code">
                <p>Phone number:</p>
                <input type="number" v-model="phoneNumber">
                <p>Email:</p>
                <input type="text" v-model="email">
                <div class="ensure" @click="ensure()">Confirm and send to email booking.</div>

                <div class="switch" @click="ty = 'zh'">中文</div>
            </div>

        </div>

        <van-popup v-model="show" v-if="ty === 'zh'">
            <div class="fill">
                <h3>填写成功</h3>
                <p>请尽快付款而且确保您预留的邮箱可以联系到您<br />我会在24小时内回复</p>
                <span @click="show = false">填写有误，返回修改。</span>
                <span v-show="!sending" @click="issend ? '' : sendemil()">{{ issend ? '已发送' : '确认发送' }}</span>
                <span v-show="sending"><i class="el-icon-loading"></i>正在发送中... </span>
            </div>
        </van-popup>

        <van-popup v-model="show" v-if="ty === 'en'">
            <div class="fill en">
                <h3>Fill in successfully</h3>
                <p>Please pay as soon as possible and<br /> make sure you can be reached by the email address you have reserved<br />media account you have set up<br />'ll respond within
                    24 hours</p>
                <span @click="show = false">This parameter is incorrect. Return to modify it.</span>
                <span v-show="!sending" @click="issend ? '' : sendemil()">{{ issend ? 'has been sent ' : 'Confirm sending'}}</span>
                <span v-show="sending"><i class="el-icon-loading"></i>Being sent... </span>
            </div>
        </van-popup>

    </div>
</template>
<script>
import countryJson from "../../assets/countryjson.json"
import emailjs from 'emailjs-com'
import '../../utils/smtp.js'
export default {
    name: "APP",
    data() {
        return {
            selectZH: '',
            ty: 'zh',
            countryJson: countryJson,
            show: false,
            issend: false,
            sending: false,
            artwork: '',
            address: '',
            name: '',
            sex: '',
            code: '',
            phoneNumber: '',
            email: ''


        };
    },
    methods: {
        ensure() {
            if (!this.artwork) {
                this.$message(this.ty === 'zh' ? '请选择周边' : 'Please select artwork')
                return
            } if (!this.selectZH) {
                this.$message(this.ty === 'zh' ? '请选择国家' : 'Please select your country')
                return
            } if (!this.name) {
                this.$message(this.ty === 'zh' ? '请填写姓名' : 'Please fill in your name')
                return
            } if (!this.sex) {
                this.$message(this.ty === 'zh' ? '请填写性别' : 'Please fill in in gender')
                return
            } if (!this.address) {
                this.$message(this.ty === 'zh' ? '请填写具体地址' : 'Please fill in the specific address')
                return
            } if (!this.code) {
                this.$message(this.ty === 'zh' ? '请填写邮政编码' : 'Please fill in the Postal code')
                return
            } if (!this.phoneNumber) {
                this.$message(this.ty === 'zh' ? '请填写手机号' : 'Please fill in your mobile phone number')
                return
            } if (!this.email) {
                this.$message(this.ty === 'zh' ? '请填写邮箱' : 'Please fill in the email')
                return
            }
            this.show = true
        },
        sendemil() {
            this.sending = true
            emailjs.send('service_tzq4tgc', 'template_y81n5pj', { artwork: this.artwork, country: this.selectZH, name: this.name, sex: this.sex, address: this.address, code: this.code, phoneNumber: this.phoneNumber, email: this.email }, 'efGrq8haGJ6-tGyBS').then((res) => {
                this.show = false
                this.$message.success(this.ty === 'zh' ? '发送成功！' : 'Successfully sent!')
                this.issend = true
                this.sending = false
            }, (errpr) => {
                this.sending = false
                console.log(errpr)
                this.$message.error(this.ty === 'zh' ? '发送失败,请稍后再试' : 'Failed to send, please try again later')
            })
        },
        copy() {
            const storage = document.createElement('textarea');
            storage.value = 'anttop@qq.com';
            this.$refs.reference.appendChild(storage);
            storage.select();
            storage.setSelectionRange(0, 99999);
            document.execCommand('copy');
            this.$refs.reference.removeChild(storage);
            // this.show=false;
            this.$message({
                message: this.ty=='zh' ?  '复制成功！' : 'Copy successfully!',
                duration: 1500,
                type: 'success'
            });
            // setTimeout(() => {
            //   window.open('weixin://','_blank')
            // }, 1500);
        },
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
    mounted() {
        console.log(countryJson)
    },
};
</script>
<style lang="less" scoped>
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
        text-align: center !important;
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
        text-align: center;

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

.flex {
    display: flex;
}

.main {
    max-height: 100vh;
    overflow: scroll;
    padding-bottom: 100px;

    .enspace {
        letter-spacing: 0 !important;
    }

    .ordermain {
        width: 90vw;
        padding: 50px;
        background-color: white;
        margin: 0 auto;
        font-size: 24px;
        color: black;
        letter-spacing: 1px;
        position: relative;

        .switch {
            position: absolute;
            display: inline;
            right: 30px;
            top: 30px;
            border: 1px solid black;
            font-size: 18px;
            padding: 4px;
            letter-spacing: normal;
        }

        .sele {
            width: 100%;
            background-color: white;
            border: 1px solid black;
            border-radius: 0px;
            color: black;
            height: 50px;
            margin-top: 10px;
            font-size: 20px;
        }

        input {
            width: 100%;
            background-color: white;
            border: 1px solid black;
            border-radius: 0px;
            color: black;
            height: 50px;
            margin-top: 10px;
            text-indent: 10px;
            font-size: 20px;
            margin-bottom: 10px;
        }

        .ensure {
            width: 65%;
            height: 70px;
            background-color: black;
            margin: 0 auto;
            text-align: center;
            line-height: 70px;
            text-indent: 5px;
            color: white;
            margin-top: 80px;
        }

        .sele:focus {
            outline: none;
        }

        p {
            text-align: start !important;

            b {
                text-decoration: underline;
            }

            &:nth-of-type(2) {
                margin-top: 60px;
            }

            &:nth-of-type(3) {
                margin-top: 40px;
            }

            &:nth-of-type(5) {
                margin-top: 40px;
            }

            &:nth-of-type(6) {
                margin-top: 40px;
            }
        }

        span {
            font-size: 16px;
        }
    }

    .my-swipe {
        width: 50%;

        img {
            width: 100%;
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

        img {
            width: 50px;
            height: 80px;
        }

        i {
            font-size: 50px;
        }
    }



    .homebg {
        width: 100%;
        height: auto;
        margin: 0 auto;
        padding-bottom: 50px;
        text-align: center;
        margin-top: 200px;

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



    .outLine {
        min-height: 100vh;
        position: relative;
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
            margin-bottom: 70px;

            span {
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

            &:nth-of-type(1) {
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
}
</style>