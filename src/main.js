//导入vue
import Vue from "vue"
//带入路由模块
import router from './router/router'
//导入App.vue
import App from "./views/App.vue"


new Vue({
    // 指定挂载点
    el: '#app',

    // 把app渲染到页面
    // render(creatElement) {
    //     return creatElement(App) 
    // }

    render: c => c(App),
    router
})