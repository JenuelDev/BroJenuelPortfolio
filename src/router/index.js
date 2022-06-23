import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "./../views/AboutMe/AboutMe.vue";

const routes = [
    {
        path: "/",
        redirect: "/home",

    },
    {
        path: "/home",
        name: "AboutMe",
        component: AboutMe
    },
    {
        path: "/experience",
        name: "Experience",
        component: () => import("./../views/MyExperience"),
    },
    {
        path: "/Project",
        name: "Project",
        component: () => import("./../views/MyWork"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("./../views/ContactMe"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "PageNotFound",
        component: () => import("./../views/PageNotFound")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (!savedPosition) {
            return { left: 0, top: 0 };
        } else {
            return savedPosition;
        }
    }
});

router.afterEach((to) => {
    document.title = `Jenuel Ganawed - ${to.name}`
});

export default router;
