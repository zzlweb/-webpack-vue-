// 抽离路由模块
//导入vue
import Vue from "vue"
// 引入路由
import VueRouter from 'vue-router'
// 导入Home
import Home from '../components/Home.vue'
// 导入Login
import Login from '../components/Login.vue'

//模块化开发 
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/login', component: Login },
        { path: '/home', component: Home }
    ]
})

export default router 