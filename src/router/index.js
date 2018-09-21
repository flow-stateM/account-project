import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/view/site/index'
import AccountPage from '@/view/account'
import IndexContent from '@/view/site/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: IndexPage,
        children: [
            {
                path:'',
                name:'home',
                component: IndexContent
            },
            {
                path: 'account',
                component: AccountPage
            },
            {
                path: 'test',
                component: AccountPage
            }
        ]
    }
  ]
})
