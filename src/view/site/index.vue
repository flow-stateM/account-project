<template>
    <div class="wrap">
        <Toptitle></Toptitle>
        <section class="main">
            <transition  name="el-fade-in-linear" mode="out-in">
                <router-view></router-view>
            </transition>
        </section>
    </div>
</template>

<script>
import Toptitle from '@/components/TopTitle'
export default {
    name: 'home',
    components:{
        Toptitle
    },
    data () {
        return {
        }
    },
    methods:{
    },
    computed:{
    }
}
</script>

<style lang="scss">
.wrap{
    background:#f8fdff;
}
</style>
