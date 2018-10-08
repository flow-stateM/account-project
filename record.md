# 项目记录

写项目时候遇到的一些小问题都会记录在这里

 1.vue-router中使用嵌套路由时使用如下配置

    
    routes: [
        {
            path: '/',
            name:'home',
            component: IndexPage,
            children: [
                {
                    path:'',
                    component: IndexContent
                },
                {
                    path: 'account',
                    component: AccountPage
                }
            ]
        }
    ]

会报警告，警告内容是如果用routerlink以name的方式跳转home时会不渲染IndexContent组件，原因是IndexContent存在于一个默认子路由，解决办法是把name给到子路由里面

    
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
                }
            ]
        }
    ]

2.在用transition标签包裹router-link时，切换路由会导致在动画过程切换不是预想的情况，将要消失的组件在动画结束后才消失，将要出现的组件先出现在下面又移动到上面，原因是动画过程中需要销毁的组件还在占位，在transition标签上加入 mode="out-in" 可以解决这个问题。

3.vue-router官方文档中推荐的监听路由变化的方法是使用watch或者导航守卫，但我的项目中（目前）使用的是computed监听route.path，发现也是可以的

4.饿了么的导航菜单组件(NavMenu)的default-active会与index进行完全匹配，如果没有找到对应的标签，则还会维持原来的active状态。

5.背景图中引入静态图片 使用 '~@/abc/def'的形式即可

6.video标签引入视频文件时需要去url-loader配置项中将相应格式配置在匹配正则表达式中

7.给img传入一个动态路径需要提前require一下，例如在sitetag组件中从了prop拿到了一个图片路径，那么这个路径应该是在父组件传入prop时已经require过的路径，否则webpack无法正常解析。