<template>
    <section :class="['index-content',animate?'':'no-animate']">
        <div class="contain1-wrap">
            <star v-if="animate"></star>
            <!-- 由于流星花园背景消耗资源较大，使用是否开启动画控制 -->
            <div class="contain1 clear">
                <div class="fl intro">
                    <div class="tip-pop-wrap">
                        <p class="tip-pop">记账理财</p>
                        <p class="tip-title">年轻人都用圈子账本</p>
                        <p class="tip-intro">简单有趣小清新，功能全面高颜值，独创了AA算账和共享账本，被AppStore和其他市场各种推荐，你值得拥有~</p>
                    </div>
                </div>
                <div class="fr animates">
                    <div class="circle">
                        <img class="ldot" src="@/assets/images/ldot.png">
                        <img class="sdot" src="@/assets/images/sdot.png">
                        <div class="phone">
                            <img src="@/assets/images/normal2.jpg" v-if="!playing">
                            <i class="play" @click="playVideo" v-if="!playing"></i>
                            <video controls autoplay src="@/assets/videos/1.mov" v-else></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contain2-wrap">
            <div class="contain2 clear">
                <div class="fl"></div>
                <div class="fr">
                    <div class="tag-wrap" v-for="item in tags" :key="item.id">
                        <sitetag v-bind="item"></sitetag>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
    import star from '@/components/StarBackground'
    import sitetag from '@/components/Sitetag'

    export default {
        name:'IndexContent',
        components:{
            star,
            sitetag
        },
        data(){
            return{
                playing:false,
                tags:[
                    {
                        id:1,
                        icon:require('@/assets/images/icons/item1.png'),
                        background:'#11d2c0',
                        tagname:'日常'
                    },{
                        id:2,
                        icon:require('@/assets/images/icons/item2.png'),
                        background:'#ffd997',
                        tagname:'家庭'
                    },{
                        id:3,
                        icon:require('@/assets/images/icons/item3.png'),
                        background:'#ffbd51',
                        tagname:'旅行'
                    },{
                        id:4,
                        icon:require('@/assets/images/icons/item4.png'),
                        background:'#0ca820',
                        tagname:'校园'
                    },{
                        id:5,
                        icon:require('@/assets/images/icons/item5.png'),
                        background:'#804936',
                        tagname:'装修'
                    },{
                        id:6,
                        icon:require('@/assets/images/icons/item6.png'),
                        background:'#f61681',
                        tagname:'结婚'
                    }
                ],
            }
        },
        methods:{
            playVideo:function(){
                this.playing = true;
            }
        },
        computed:{
            animate(){
                return this.$store.state.animate
            }
        }
    }
</script>

<style scoped lang="scss">
.contain1-wrap{
    position: relative;
    .starry-sky{
        position: absolute;
    }
    .contain1{
        width: 80%;
        min-width: 1024px;
        height: 540px;
        margin: 0 auto;
        // background:#f8fdff;
        position: relative;
        z-index: 1;
        .intro{
            width: 50%;
            height: 100%;
            display: inline-flex;
            flex-wrap: wrap;
            align-content: center;
            align-items: center;
        }
        .animates{
            width: 50%;
            height: 100%;
            position: relative;
            overflow: hidden;
            img{
                position: absolute;
            }
            .circle{
                width: 688px;
                height: 100%;
                background-image: url('~@/assets/images/circle.png');
                background-size: 100% auto;
                background-position: left top;
                background-repeat: no-repeat;
                position: absolute;
                top: 50%;
                left:0;
                transform: translate(0,-50%)
            }
            .phone{
                width: 257px;
                height: 517px;
                position: absolute;
                top: 15%;
                left: 50%;
                transform: translate(-50%,0);
                background-image: url('~@/assets/images/phone.png');
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                img{
                    width: 227px;
                    left: 15px;
                    top: 58px;
                }
                .play{
                    width: 102px;
                    height: 102px;
                    position: absolute;
                    z-index: 1;
                    top: 220px;
                    left: 78px;
                    background-image: url('~@/assets/images/play.png');
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    cursor: pointer;
                    transform: scale(1);
                    &:hover{
                        animation: bigger 0.5s ease forwards;
                    }
                }
                video{
                    position: absolute;
                    width: 228px;
                    height: 401px;
                    left: 15px;
                    top: 58px;
                }
            }
        }
    }
}

.contain2-wrap{
    background-color: rgb(241,241,241);
    .contain2{
        width: 80%;
        min-width: 1024px;
        padding: 65px 0;
        margin: 0 auto;
        .fl{
            width: 50%;
        }
        .fr{
            width: 50%;
            display: flex;
            flex-wrap: wrap;
            margin-top: -25px;
            .tag-wrap{
                width: 33%;
                display: flex;
                justify-content: center;
                align-items: center;
                align-content: center;
                margin-top: 25px;
            }
        }
    }
}

.ldot{
    top: 12%;
    left: 8%;
    width: 85%;
}

.sdot{
    top: 30%;
    left: 28%;
    width: 50%;
}

.ldot,.sdot{
    animation: rotate360 30s linear infinite;
}

.no-animate{
    .ldot{
        animation: none !important;
    }
    .sdot{
        animation: none !important;
    }
}

@keyframes rotate360 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}

@keyframes bigger {
    0% {transform: scale(1)}
    25% {transform: scale(1.5)}
    50% {transform: scale(0.8)}
    100% {transform: scale(1.5)}
}

@keyframes smaller {
    from {transform: scale(1.5)}
    to {transform: scale(1)}
}

.tip-pop-wrap{
    font-weight: lighter;
    .tip-pop{
        width: 114px;
        height: 43px;
        background: url('~@/assets/images/arrow1.png');
        line-height: 38px;
        font-size: 20px;
        text-align: center;
    }
    .tip-title{
        width: fit-content;
        margin-top: 8px;
        position: relative;
        font-size: 45px;
        line-height: 45px;
        &:after{
            content: '';
            display: block;
            border: 1px solid #000;
            border-radius: 50%;
            width: 3px;
            height: 3px;
            position: absolute;
            right:-3px;
            bottom: 0;
        }
    }
    .tip-intro{
        width: 80%;
        margin-top: 36px;
        font-size: 16px;
        line-height: 22px;
    }
}
</style>