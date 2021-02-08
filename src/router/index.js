import { createRouter, createWebHashHistory } from 'vue-router'
import Intro from './../views/AboutMe/AboutMe.vue'
import MyExperience from './../views/MyExperience'
import MyWork from './../views/MyWork'
import CodeChallenge from './../views/CodeChallenge'
import ContactMe from './../views/ContactMe'
import PageNotFound from './../views/PageNotFound'

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
        component: MyExperience
    },
    {
        path: '/work',
        name: "Work",
        component: MyWork
    },
    {
        path: '/codechallenge',
        name: "CodeChallenge",
        component: CodeChallenge
    },
    {
        path: '/contact',
        name: "Contact",
        component: ContactMe
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;