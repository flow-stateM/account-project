<template>
    <section class="index-content">
        <div class="contain1-wrap">
            <star></star>
            <div class="contain1">
                <div class="fl intro">
                    <div class="tip-pop-wrap">
                        <div class="tip-pop">

                        </div>
                    </div>
                </div>
                <div class="fr animates"></div>
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
            display: inline-flex;
            flex-wrap: wrap;
            align-content: center;
            align-items: center;
        }
        .animates{
            width: 50%;
        }
    }
}

.tip-pop-wrap{
    .tip-pop{
        width: 114px;
        height: 43px;
        background: url('~@/assets/images/arrow1.png')
    }
}
</style>