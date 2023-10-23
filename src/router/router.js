import { createRouter, createWebHistory } from "vue-router"
import Main from "@/pages/Main";
import postsPage from "@/pages/postsPage";
import About from "@/pages/About";

const routes = [
    {
        path:'/',
        component: Main
    },
    {
        path:'/posts',
        component: postsPage
    },
    {
        path:'/about',
        component: About
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;