import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// 登陆界面
// const login = () => import("@/pages/login/login")

// 内容部分
const postArticle = () => import("@/pages/content/post-article")
const articleManage = () => import("@/pages/content/manage-article")
const imageManage = () => import("@/pages/content/manage-image")
const commentManage = () => import("@/pages/content/manage-comment")

// 首页
const index = () => import("@/pages/dashboard/index")

// operation
const categoryManage = () => import("@/pages/operation/category")
const loopManage = () => import("@/pages/operation/loop")

// 设置
const friendLink = () => import("@/pages/settings/friend-link")
const webSizeInfo = () => import("@/pages/settings/web-size-info")

// 用户
const email = () => import("@/pages/user/email")
const info = () => import("@/pages/user/info")
const list = () => import("@/pages/user/list")
const resetPassword = () => import("@/pages/user/reset-password")


//
const baseView = () => import("@/layout/base-view")
const rightView = () => import("@/layout/right-content")

// luyou
const routes = [
    {
        path: '',
        component: baseView,
        redirect: '/index',
        children: [
            {
                path: "/index",
                component: index
            },
            {
                path: '/content',
                component: rightView,
                children: [
                    {
                        path: 'post-article',
                        component: postArticle
                    },
                    {
                        path: 'manage-article',
                        component: articleManage
                    },
                    {
                        path: 'manage-comment',
                        component: commentManage
                    },
                    {
                        path: 'manage-image',
                        component: imageManage
                    }
                ]
            },
            {
                path: '/user',
                component: rightView,
                children: [
                    {
                        path: '/email',
                        component: email
                    },
                    {
                        path: 'info',
                        component: info
                    },
                    {
                        path: 'list',
                        component: list
                    },
                    {
                        path: 'reset-password',
                        component: resetPassword
                    }
                ]
            },
            {
                path: '/operation',
                component: rightView,
                children: [
                    {
                        path: 'category',
                        component: categoryManage
                    },
                    {
                        path: 'loop',
                        component: loopManage
                    }
                ]
            },
            {
                path: '/settings',
                component: rightView,
                children: [
                    {
                        path: 'friend-link',
                        component: friendLink
                    },
                    {
                        path: '/web-size-info',
                        component: webSizeInfo
                    }
                ]
            }

        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
