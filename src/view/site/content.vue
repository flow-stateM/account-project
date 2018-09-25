<template>
    <section class="index-content">
        <div class="contain1-wrap">
            <star></star>
            <div class="contain1">
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
        <div class="contain2-wrap"></div>
    </section>
</template>

<script>
    import star from '@/components/StarBackground'

    export default {
        name:'IndexContent',
        components:{
            star
        },
        data(){return{
            playing:false
        }},
        methods:{
            playVideo:function(){
                this.playing = true;
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
        background:#f8fdff;
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
                left: 55%;
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
                    // animation: smaller 0.3s ease forwards;
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