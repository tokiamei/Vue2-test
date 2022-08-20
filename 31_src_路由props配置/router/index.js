/* 改文件用于创建整个应用的路由器 */
import VueRouter from "vue-router"
// 引入组件
import About from "../pages/About.vue"
import Home from "../pages/Home.vue"
import Message from "../pages/Message.vue"
import News from "../pages/News.vue"
import Detail from "../pages/Detail.vue"

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name: "guanyu",
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    name: "xiaoxi",
                    path: "message",
                    component: Message,
                    children: [
                        {
                            name: "xiangqing",
                            path: "detail",
                            component: Detail,
                            // props 第一种写法，值为对象，该对象中所有的 key-value 都会以 props 的形式传给 Detail 组件
                            // props: { a: 1, b: "hello" }

                            // props 第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有 params 参数，以 props 形式传给 Detail 组件
                            // props: true

                            // props 第三种写法，值为函数
                            props($route) {
                                return { id: $route.query.id, title: $route.query.title }
                            }
                        }
                    ]
                },
                {
                    path: "news",
                    component: News
                },
            ]
        },
    ]
})