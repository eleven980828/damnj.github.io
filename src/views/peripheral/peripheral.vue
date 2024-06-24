<template>
    <div class="main" id="main">
        <div class="outLine">
            <div class="title">
                <p>· Antto 安童 ·</p>
                <p>Oriental Tattooist/ IIIustrator/ XAXA Owner</p>
                <i @click="$goback()" class="el-icon-arrow-left"></i>
            </div>

            <div class="midbut">
                <div class="works">
                    <span>周边作品</span>
                    <!-- <span>works</span> -->
                </div>
            </div>

            <div class="ordermain">
                <div class="order">
                    <van-swipe class="my-swipe" indicator-color="white" :autoplay="2000">
                        <van-swipe-item v-for="(item, index) in imglist.list1" :key="index">
                            <img :src="item" alt="">
                        </van-swipe-item>

                    </van-swipe>
                    <div class="msg">
                        <p>银镯子《云游》</p>
                        <p>安童·主师联名</p>
                        <p>材质:银色</p>
                        <p>克重:大约50克</p>
                        <p>售价:3600元</p>
                        <p>Cloud bracelet</p>
                        <p>Antto · Zhushi Joint works</p>
                        <p>Material: silver</p>
                        <p>G weight about 50g</p>
                        <p>Price: 500 U.S.dollar</p>
                    </div>
                    <span @click="$goto('order')">订购<b></b>ORDER</span>
                </div>
                <div class="order">
                    <van-swipe class="my-swipe" indicator-color="white" :autoplay="2500">
                        <van-swipe-item v-for="(item, index) in imglist.list2" :key="index">
                            <img :src="item" alt="">
                        </van-swipe-item>

                    </van-swipe>
                    <div class="msg">
                        <p>银镯子《云游》</p>
                        <p>安童·主师联名</p>
                        <p>材质:乌色(做旧)</p>
                        <p>克重:大约50克</p>
                        <p>售价:3600元</p>
                        <p>Cloud bracelet</p>
                        <p>Antto · Zhushi Joint works</p>
                        <p>Material: Silver(Make old)</p>
                        <p>G weight about 50g</p>
                        <p>Price: 500 U.S.dollar</p>
                    </div>
                    <span @click="$goto('order')">订购<b></b>ORDER</span>
                </div>
                <div class="order">
                    <van-swipe class="my-swipe" indicator-color="white" :autoplay="3000">
                        <van-swipe-item v-for="(item, index) in imglist.list3" :key="index">
                            <img :src="item" alt="">
                        </van-swipe-item>

                    </van-swipe>


                    <div class="msg">
                        <p>T恤《蝉》</p>
                        <p>安童·山涧水2024夏季</p>
                        <p>材质:棉</p>
                        <p>克重:大约240克</p>
                        <p>售价:700元(包邮)</p>
                        <p>Cicada T-shirt</p>
                        <p>Antto · Intoriver of 2024</p>
                        <p>Material: Cotton</p>
                        <p>G weight: 20g</p>
                        <p>Price: 96 U.S.dollar</p>
                    </div>
                    <span class="soldout">售罄<b></b>Sold out</span>
                </div>
            </div>

            <div class="backtop" @click="toTop()">
                <img src="~@/assets/gotop.png" alt="">
            </div>
            <div class="lazyimg">

            </div>
            <!-- <div class="homebg">
                <p>The works on this page were created in 2022-2023 </br>Thank you for browsing</p>
                <p>For more information, please contact Instagram: anttoxaxa</p>

                <p>本页作品创作时间为2022-2023年</br>感谢您的浏览</p>
                <p>相关事宜请联系微信：anttoxaxa</p>
            </div> -->
        </div>
        <div class="homebg">
            <p>更多周边，敬请期待。</p>
            <p>More works, coming soon.</p>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
    name: "APP",
    data() {
        return {
            imglist: 
                {
                    list1: [
                        require('@/assets/orderList/zi/1-1.jpg'),
                        require('@/assets/orderList/zi/1-2.jpg'),
                        require('@/assets/orderList/zi/1-3.jpg'),
                        require('@/assets/orderList/zi/1-4.jpg'),
                    ], list2: [
                        require('@/assets/orderList/zi/3-1.jpg'),
                        require('@/assets/orderList/zi/3-2.jpg'),
                        require('@/assets/orderList/zi/3-3.jpg'),
                        require('@/assets/orderList/zi/3-4.jpg'),
                        require('@/assets/orderList/zi/3-5.jpg'),
                    ], list3: [
                        require('@/assets/orderList/zi/4-1.jpg'),
                        require('@/assets/orderList/zi/4-2.jpg'),
                        require('@/assets/orderList/zi/4-3.jpg'),
                        require('@/assets/orderList/zi/4-4.jpg'),
                        require('@/assets/orderList/zi/4-5.jpg'),
                        require('@/assets/orderList/zi/4-6.jpg'),
                        require('@/assets/orderList/zi/5-1.jpg'),
                        require('@/assets/orderList/zi/5-2.jpg'),
                        require('@/assets/orderList/zi/5-3.jpg'),
                        require('@/assets/orderList/zi/6-1.jpg'),
                        require('@/assets/orderList/zi/6-2.jpg'),
                        require('@/assets/orderList/zi/6-3.jpg'),
                    ]
                },
        };
    },
    methods: {
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
    mounted() { },
};
</script>
<style lang="less" scoped>
@basecolor: #cfcfcf;
@fontcolor: #aaaaaa;

.flex {
    display: flex;
}

.main {
    max-height: 100vh;
    overflow: scroll;
    padding-bottom: 100px;

    .my-swipe {
        width: 50%;

        img {
            width: 100%;
            // height: 350px;
        }
    }

    .ordermain {
        width: 650px;
        margin: 0 auto;

        // background-color: #282924;
        .order {
            width: 100%;
            display: flex;
            padding: 30px 30px 40px 30px;
            background-color: #282924;
            flex-wrap: wrap;
            margin-bottom: 50px;
            img{
                width: 100%;
                // height: 350px;
            }

            span {
                width: 100%;
                border: 2px solid @fontcolor;
                height: 50px;
                font-size: 25px;
                color: @basecolor;
                box-sizing: border-box;
                line-height: 48px;
                margin-top: 40px;
                letter-spacing: 15px;
                text-indent: 15px;
                text-align: center;
                b {
                    width: 20px;
                    display: inline-block;
                }
            }
            .soldout{
                border: 2px solid black !important;
                color: black;
            }

            .msg {
                display: flex;
                width: 50%;
                flex-direction: column;

                p {
                    text-align: start;
                    color: @basecolor ;
                    font-size: 18px;
                    width: 100%;
                    padding: 0 20px 0 50px;
                    margin-bottom: 5px;

                    &:nth-of-type(2) {
                        margin-bottom: 25px;
                    }

                    &:nth-of-type(5) {
                        margin-bottom: 25px;
                    }

                    &:nth-of-type(7) {
                        margin-bottom: 25px;
                    }
                }
            }
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
            margin-bottom: 110px;

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