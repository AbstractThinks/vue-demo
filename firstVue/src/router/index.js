import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tutorial from '@/components/Tutorial'
import VuexTutorial from '@/components/VuexTutorial'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      component: Tutorial
    },
    {
      path: '/vuextutorial',
      name: 'VuexTutorial',
      component: VuexTutorial
    }
  ]
})
