import { createRouter, createWebHashHistory } from "vue-router";
import Intro from "./../views/AboutMe/AboutMe.vue";

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
        component: () => import("./../views/MyExperience")
    },
    {
        path: "/work",
        name: "Work",
        component: () => import("./../views/MyWork")
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("./../views/ContactMe")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "PageNotFound",
        component: () => import("./../views/PageNotFound")
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
