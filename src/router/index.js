import { createRouter, createWebHashHistory } from "vue-router";
import Intro from "./../views/AboutMe/AboutMe.vue";
import MyExperience from "./../views/MyExperience";
import MyWork from "./../views/MyWork";
import CodeChallenge from "./../views/CodeChallenge";
import PageNotFound from "./../views/PageNotFound";

const routes = [
    {
        path: "/",
        redirect: "/aboutme"
    },
    {
        path: "/aboutme",
        name: "AboutMe",
        component: Intro
    },
    {
        path: "/experience",
        name: "Experience",
        component: MyExperience
    },
    {
        path: "/work",
        name: "Work",
        component: MyWork
    },
    {
        path: "/codechallenge",
        name: "CodeChallenge",
        component: CodeChallenge
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("./../views/ContactMe")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "PageNotFound",
        component: PageNotFound
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (!savedPosition) {
            return { left: 0, top: 0 };
        } else {
            return savedPosition;
        }
    }
});

export default router;
