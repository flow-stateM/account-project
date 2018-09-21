<template>
    <section class="index-content">
        <div class="contain1-wrap">
            <star></star>
            <div class="contain1">
                <div class="fl intro">
                    <div class="tip-pop-wrap">
                        <div class="tip-pop">
                            记账理财
                        </div>
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
        width: 1024px;
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
                width: 100%;
                height: 100%;
                background-image: url('~@/assets/images/circle.png');
                background-size: 130% auto;
                background-position: left top;
                background-repeat: no-repeat;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%)
            }
            .phone{
                width: 257px;
                height: 517px;
                position: absolute;
                top: 14%;
                left: 65%;
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
    top: 10%;
    left: 13%;
    width: 110%;
}

.sdot{
    top: 32%;
    left: 37%;
    width: 60%;
}

.ldot,.sdot{
    animation: rotate360 20s linear infinite;
}

@keyframes rotate360 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}

.tip-pop-wrap{
    .tip-pop{
        width: 114px;
        height: 43px;
        background: url('~@/assets/images/arrow1.png');
        line-height: 38px;
        font-size: 20px;
        text-align: center;

    }
}
</style>