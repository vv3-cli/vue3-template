import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: "/",
            redirect: "/index"
        },
        {
            path: "/index",
            name: "index",
            component: () => import(/* webpackChunkName: "introduce" */ "./../views/index/index.vue")
        },
        {
            path: "/list",
            name: "list",
            component: () => import(/* webpackChunkName: "introduce" */ "./../views/list/index.vue")
        }
    ]
});

export default router;
