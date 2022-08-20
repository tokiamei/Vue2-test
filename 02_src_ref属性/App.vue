<template>
   <div>
    <h2 ref="H2">{{msg}}</h2>
    <button @click="showDOM" ref="btn">点击输出上方的DOM</button>
    <School ref="sch" id="sch"/>
   </div>
</template>

<script>
import School from './components/School.vue'
export default {
    name: "App",
    components: {School},
    data() {
        return {msg: "欢迎来到魔法世界!!!"}
    },
    methods: {
        showDOM() {
            console.log(this.$refs.H2) // 真实 DOM 元素
            console.log(this.$refs.btn) // 真实 DOM 元素
            console.log(this.$refs.sch) // School 组件的实例对象
            console.log(document.getElementById("sch")) // School 组件模板的 DOM
        }
    }
}
</script>