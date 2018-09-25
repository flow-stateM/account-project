<template>
    <section class="footer">
        <div class="footer-content">
            <p>Thanks : 圈子账本</p>
            <p>technology:Vue2、Vue-router、Vuex、e-charts、webpack、es6</p>
            <p><span>contact: flow-stateM</span><span>tel:13701152469</span><span>github : <a href="https://github.com/flow-stateM" target="_blank">https://github.com/flow-stateM</a></span></p>
        </div>
    </section>
</template>

<script>
    export default {
        name:'Footer'
    }
</script>

<style lang="scss" scoped>
.footer{
    background: #000;
    color: #fff;
    padding: 30px 0;
    .footer-content{
        width: 80%;
        min-width: 1024px;
        margin: 0 auto;
        line-height: 30px;
        span{
            margin-left: 25px;
            &:nth-child(1){
                margin-left: 0;
            }
        }
    }
}
</style>