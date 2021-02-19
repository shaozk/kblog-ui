import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// 导入的内容
const home = () => import("@/components/Home")
const article = () => import("@/components/Article")

const routes = [
    {path: '/home', components: home},
    {path: '/article', components: article}
]

const router = new VueRouter({
    routes
})

export default router
