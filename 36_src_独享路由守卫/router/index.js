/* 改文件用于创建整个应用的路由器 */
import VueRouter from "vue-router"
// 引入组件
import About from "../pages/About.vue"
import Home from "../pages/Home.vue"
import Message from "../pages/Message.vue"
import News from "../pages/News.vue"
import Detail from "../pages/Detail.vue"

// 创建并暴露一个路由器
 const router = new VueRouter({
    routes: [
        {
            name: "guanyu",
            path: "/about",
            component: About,
            meta: { title: "关于", isAuth: true },
            beforeEnter: (to, from, next) => {
                if ( to.meta.isAuth ) {
                    if ( localStorage.getItem("school") === "霍格沃茨" ) next()
                    else alert("霍格沃茨的学员才可以查看")
                } else next()
            }
        },
        {
            name: "zhuye",
            path: "/home",
            component: Home,
            meta: { title: "主页" },
            children: [
                {
                    name: "xiaoxi",
                    path: "message",
                    component: Message,
                    meta: { isAuth: true, title: "信息" },
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
                    name: "xinwen",
                    path: "news",
                    component: News,
                    meta: { isAuth: true, title: "新闻" },
                },
            ]
        },
    ]
})

// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach( (to, from, next) => {
//     /* console.log("to:", to)
//     console.log("from:", from)
//     console.log("======================") */

//     if ( to.meta.isAuth ) {
//         if ( localStorage.getItem("school") === "霍格沃茨" ) next()
//         else alert("霍格沃茨的学员才可以查看")
//     } else next()
// } )

router.afterEach( (to, from) => {
    // ${//these hooks do not get a next function and cannot affect the navigation}
    document.title = to.meta.title || 混沌魔君索伦森的Vue页面
})

export default router