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
        component: PageNotFound
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
