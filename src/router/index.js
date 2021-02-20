import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// 登陆界面
const login = () => import("@/pages/login/login")

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
export const routes = [
    {
        path: '',
        component: baseView,
        redirect: '/index',
        children: [
            {
                path: "/index",
                name: '首页',
                icon: 'el-icon-house',
                hidden: false,
                component: index
            },
            {
                path: '/content',
                name: '内容',
                icon: 'el-icon-document',
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: 'post-article',
                        name: '发表文章',
                        icon: 'el-icon-reading',
                        hidden: false,
                        component: postArticle
                    },
                    {
                        path: 'manage-article',
                        name: '文章管理',
                        icon: 'el-icon-document',
                        hidden: false,
                        component: articleManage
                    },
                    {
                        path: 'manage-comment',
                        name: '评论管理',
                        icon: 'el-icon-chat-line-round',
                        hidden: false,
                        component: commentManage
                    },
                    {
                        path: 'manage-image',
                        name: '图片管理',
                        icon: 'el-icon-picture-outline',
                        hidden: false,
                        component: imageManage
                    }
                ]
            },
            {
                path: '/user',
                name: '用户',
                icon: 'el-icon-user',
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: 'email',
                        name: '邮箱设置',
                        icon: 'el-icon-phone-outline',
                        hidden: false,
                        component: email
                    },
                    {
                        path: 'info',
                        name: '用户信息',
                        icon: 'el-icon-goods',
                        hidden: false,
                        component: info
                    },
                    {
                        path: 'list',
                        name: '用户列表',
                        icon: 'el-icon-orange',
                        hidden: false,
                        component: list
                    },
                    {
                        path: 'reset-password',
                        name: '密码重置',
                        icon: 'el-icon-unlock',
                        hidden: false,
                        component: resetPassword
                    }
                ]
            },
            {
                path: '/operation',
                name: '运营',
                icon: 'el-icon-odometer',
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: 'category',
                        name: '分类管理',
                        icon: 'el-icon-pie-chart',
                        hidden: false,
                        component: categoryManage
                    },
                    {
                        path: 'loop',
                        name: '轮播图管理',
                        icon: 'el-icon-data-board',
                        hidden: false,
                        component: loopManage
                    }
                ]
            },
            {
                path: '/settings',
                name: '设置',
                icon: 'el-icon-setting',
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: 'friend-link',
                        name: '友情连接',
                        icon: 'el-icon-link',
                        hidden: false,
                        component: friendLink
                    },
                    {
                        path: '/web-size-info',
                        name: '网站信息',
                        icon: 'el-icon-warning-outline',
                        hidden: false,
                        component: webSizeInfo
                    }
                ]
            }

        ]
    },
    {
        path: '/login',
        component: login
    }
]

const router = new VueRouter({
    routes
})

export default router
