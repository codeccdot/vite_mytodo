import { createRouter, createWebHistory } from 'vue-router'

// 开启历史模式
// vue2中使用的mode：history 实现
import Layout from "../Layout/index.vue"

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path:'/',
            redirect:'/index'
        },
        {
            path:'/index',
            component:Layout,
            children:[
              {
                path:'/index',
                name:"index",
                component:()=>import("../view/index/index.vue")
              }  
            ]
        },

    ]
})

export default router