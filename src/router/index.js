import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '@/pages/intro'
import PageNotFound from '@/pages/page-not-found'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/intro'
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
