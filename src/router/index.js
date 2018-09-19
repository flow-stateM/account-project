import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/view/site/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: IndexPage
    },
    {
        path:'/test',
        name:'hello',
        component:HelloWorld
    }
  ]
})
