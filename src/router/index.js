import { createRouter, createWebHashHistory } from 'vue-router'
import Intro from './../views/AboutMe/AboutMe.vue'
const routes = [
    {
        path: '/',
        redirect: "/aboutme"
    },
    {
        path: '/aboutme',
        name: "AboutMe",
        component: Intro
    },
    {
        path: '/experience',
        name: "Experience",
        component: () => import(/* webpackChunkName: "experience" */ './../views/MyExperience')
    },
    {
        path: '/work',
        name: "Work",
        component: () => import(/* webpackChunkName: "work" */ './../views/MyWork')
    },
    {
        path: '/codechallenge',
        name: "CodeChallenge",
        component: () => import(/* webpackChunkName: "codechallenge" */ './../views/CodeChallenge')
    },
    {
        path: '/contact',
        name: "Contact",
        component: () => import(/* webpackChunkName: "contact" */ './../views/ContactMe')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: () => import(/* webpackChunkName: "notfound" */  './../views/PageNotFound')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;