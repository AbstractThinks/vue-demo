import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '@/components/cn/index'
import Detail from '@/components/cn/detail'
import List from '@/components/cn/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cn/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/cn/List',
      name: 'Index',
      component: Index
    },
    {
      path: '/cn/Detail/:id',
      name: 'Index',
      component: Index
    }
  ]
})
