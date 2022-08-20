import VueRouter from "vue-router"
import Home from "@/pages/Home"
import About from "@/pages/About"
export default new  VueRouter({
    routes: [
        {
            name: "home",
            path: "/home",
            component: Home
        },
        {
            name: "about",
            path: "/about",
            component: About
        }
    ]
})