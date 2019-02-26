import Home from '@/views/Home.vue'

export default [
  {
    // 命名路由
    path: '/',
    // 别名
    alias: '/home_page', 
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    // 命名视图  App.vue中配置  <router-view name="email"/> <router-view name="tel"/>
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    // 重定向
    path: '/main',
    // redirect: '/'
    /* redirect: {
      name: 'home'
    } */
    /* redirect: to => {
      // console.log(to)
      return {
        name: 'home'
      }
    } */
    redirect: to => '/'
  },
  {
    path: '/'
  }
]
