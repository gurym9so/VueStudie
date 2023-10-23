import { createRouter, createWebHistory } from "vue-router"
import Main from "@/pages/Main";
import postsPage from "@/pages/postsPage";
import About from "@/pages/About";
import PostsIdPage from "@/pages/PostsIdPage";

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
    },
    {
        path:'/posts/:id',
        component: PostsIdPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;