import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './user'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        animate:true //动画效果是否显示
    },
    mutations: {
      changeAnimate (state ,value) {
        state.animate = value;
      }
    },
    modules:{
        userStore:userStore
    }
})