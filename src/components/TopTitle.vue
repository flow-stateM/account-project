<template>
    <header class="topTitle">
        <div class="topFix">
            <div class="topContent clear">
                <router-link :to="{name:'home'}">
                    <div class="fl logo"><img src="../assets/images/logo2.png" alt="logo"></div>
                </router-link>
                <div class="fr nav">
                    <el-menu
                    :default-active="nowPath"
                    class="el-menu-demo"
                    :router="true"
                    mode="horizontal"
                    @select="handleSelect"
                    text-color="#000"
                    active-text-color="#11d2c0">
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="/account">账目中心</el-menu-item>
                    <el-submenu index="/user">
                        <template slot="title">个人中心</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-submenu index="2-4">
                        <!-- <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item> -->
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="/intro">功能介绍</el-menu-item>
                    </el-menu>
                    <div class="switch-wrap">
                        是否开启动画
                        <!-- 用于降低系统资源消耗 -->
                        <el-switch
                            style="margin-left:4px"
                            v-model="animate"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                        </el-switch>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name:'TopTitle',
        data(){
            return {
            }
        },
        methods:{
            handleSelect:function(index){
            },
        },
        computed:{
            nowPath:function(){
                return this.$route.path
            },
            animate:{
                get:function(){
                    return this.$store.state.animate
                },
                set:function(newValue){
                    this.$store.commit('changeAnimate',newValue)
                    // 改变后提示用户
                    this.$notify({
                        title: '提示',
                        message: newValue?'动画开启':'动画关闭',
                        type: newValue?'success':'warning',
                        showClose: false,
                        offset:60
                    });
                }
            }
        },
    }
</script>

<style scoped lang="scss">
.el-menu--horizontal{
    border-bottom-color:#f2f0f0;
}
.topTitle{
    height: 61px;
    .topFix{
        width: 100%;
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        border-bottom: 1px solid #f2f0f0;
        background: #ffffff;
        z-index: 10;
        .topContent{
            width: 80%;
            min-width: 1024px;
            height: 100%;
            margin: 0 auto;
            .logo{
                display: inline-flex;
                height: 100%;
                align-items: center;
                align-content: center;
                img{
                    width: 125px;
                    height: 32px;
                }
            }
            .nav{
                height: 100%;
                display: flex;
                align-content: center;
                align-items: center;
                .switch-wrap{
                    display: inline-flex;
                    font-size: 14px;
                    align-content: center;
                    align-items: center;
                    border-bottom: 1px solid transparent;
                }
            }
        }
    }
}
</style>
