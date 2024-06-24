<template>
    <div class="main" :style="{ height: pageheight + 'px' }">

        <div class="outLine">
            <div class="title">
                <p>· Antto 安童 ·</p>
                <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
                <i @click="$goback()" class="el-icon-arrow-left"></i>
            </div>

            <div class="midbox">
                <div class="blackline">
                    <h3>Instagram :</h3>
                    <a href="https://www.instagram.com/anttoxaxa?igsh=MThnY2ZjeXJrcWZhaA%3D%3D&utm_source=qr">anttoxaxa</a>
                    <h3>小红书: </h3>
                    <a href="https://www.xiaohongshu.com/user/profile/5fc3b0680000000001000040?xhsshare=CopyLink&appuid=5fc3b0680000000001000040&apptime=1719197151">安童</a>
                    <h3>WeChat微信:</h3>
                    <a @click="copy()" ref="reference">anttoxaxa</a>

                    <h3>点击微信号，即可复制。</h3>
                    <h3>请自行跳转至微信添加好友。</h3>
                    <div class="hole"></div>
                </div>
            </div>




        </div>



    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import Vue from 'vue'
import { Popup } from 'vant';
import 'vant/lib/popup/style';
Vue.use(Popup)
export default {
    name: 'APP',
    data() {
        return {
            show: false,
            pageheight: 0
        };
    },
    mounted() {
        this.pageheight = window.innerHeight
        const appDom = document.getElementById('app');
        console.log(this.$store.state.scrollVal)
        if (this.$store.state.scrollVal) {
            appDom.scrollTo({
                top: this.$store.state.scrollVal,
                behavior: 'instant'
            });
        }
    },
    methods: {
        copy() {
            const storage = document.createElement('textarea');
            storage.value = 'anttoxaxa';
            this.$refs.reference.appendChild(storage);
            storage.select();
            storage.setSelectionRange(0, 99999);
            document.execCommand('copy');
            this.$refs.reference.removeChild(storage);
            // this.show=false;
            this.$message({
                message: '复制成功！ Copy successfully!',
                duration: 1500,
                type: 'success'
            });
            // setTimeout(() => {
            //   window.open('weixin://','_blank')
            // }, 1500);
        },
        scrolltop() {
            const appDom = document.getElementById('app');
            console.log(appDom.scrollTop)
            return appDom.scrollTop
        },
        scrollBooking() {
            const appDom = document.getElementById('app');
            const bookingtitle = document.getElementById('booktitle');
            console.log(bookingtitle.scrollTop)
            appDom.scrollTo({
                top: bookingtitle.getBoundingClientRect().top + window.pageYOffset,
                behavior: 'smooth'
            })
        },
        toTop() {
            const appDom = document.getElementById('app');
            appDom.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        engpush() {
            const appDom = document.getElementById('app');
            this.$store.state.scrollVal = appDom.scrollTop
            this.$router.push(
                { name: 'booking', params: { ty: 'en' } }
            )
        }
    },
    components: { RouterLink }
}
</script>
<style lang="less" scoped>
@basecolor: #cfcfcf;
@fontcolor: #aaaaaa;

.main {
    width: 750px;


    .midbox {
        width: 55%;
        background-color: #282924;
        height: 900px;
        margin: 0 auto;
        margin-top: 150px;
        text-align: center;
        color: #d6d6d4 !important;
        padding: 6px;

        .blackline {
            border: 4px solid black;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        h3 {
            font-weight: normal;
            font-size: 18px;
            color: #d6d6d4 !important;
                margin-top: 100px;
                &:nth-of-type(5){
                    margin-top: 20px;
                }
                &:nth-of-type(4){
                    margin-top: 50px;
                }
        }

        a {
            font-size: 35px;
            color: #d6d6d4 !important;
            text-decoration: underline;
        }
        .hole{
            border-radius: 50%;
            width: 100px;
            height: 100px;
            margin: 0 auto;
            background-color: black;
            margin-top: 100px;
        }
    }

    .ENG {
        p {
            font-size: 21px !important;
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

        .wordbox {
            display: block;
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            p {
                display: inline-block;
                font-size: 60px;
            }
        }
    }





    .outLine {
        height: 96vh;
        position: relative;
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

}
</style>