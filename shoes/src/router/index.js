import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '@/components/cn/index'
import Detail from '@/components/cn/detail'
import List from '@/components/cn/list'

import EnIndex from '@/components/en/index'
import EnDetail from '@/components/en/detail'
import EnList from '@/components/en/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cn/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/cn/list',
      name: 'List',
      component: List
    },
    {
      path: '/cn/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/en/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/en/list',
      name: 'Index',
      component: Index
    },
    {
      path: '/en/detail/:id',
      name: 'Index',
      component: Index
    }
  ]
})
