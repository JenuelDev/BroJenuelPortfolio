import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/about'
    },
    {
        path: '/about',
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ './../pages/about-me')
    },
    {
        path: '/experience',
        name: "Experience",
        component: () => import(/* webpackChunkName: "experience" */ './../pages/my-experience')
    },
    {
        path: '/work',
        name: "Work",
        component: () => import(/* webpackChunkName: "work" */ './../pages/my-work')
    },
    {
        path: '/codechallenge',
        name: "CodeChallenge",
        component: () => import(/* webpackChunkName: "codechallenge" */ './../pages/code-challenge')
    },
    {
        path: '/contact',
        name: "Contact",
        component: () => import(/* webpackChunkName: "contact" */ './../pages/contact-me')
    },
    {
        path: '/*',
        name: 'PageNotFound',
        component: () => import(/* webpackChunkName: "notfound" */  '@/pages/page-not-found')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
    }
})

export default router
