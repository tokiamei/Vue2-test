<template>
   <div class="app">
    <h1>{{msg}}，{{studentName}}</h1>

    <!-- 通过给父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，用@或v-on，事件的名字随意） -->
    <!-- <Student @custom="getStudentName"></Student> -->

    <!-- 通过给父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用 ref，加上 native 表示原生的 click 事件） -->
    <Student ref="student" @click.native="show"></Student>

    <!-- 通过父组件给子组件传递函数类型的 props 实现：子给父传递数据 -->
    <!-- 父组件悄悄传一个函数给子组件，子组件去触发事件调用函数，并把参数传出去，然后在父组件中触发回调函数，接收子组件的参数 -->
    <School :getSchoolName="getSchoolName"></School>
   </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name: "App",
    components: { Student, School },
    data() {
        return {
            msg: "你好啊！",
            studentName:""
        }
    },
    methods: {
        // 获得学校名
        getSchoolName(name) {
            console.log(name);
        },
        // getStudentName(name) {
        //     // console.log("我被调用了", name);
        //     this.studentName = name;
        // },
        // demo02 () {
        //     console.log("custom02事件触发了！！！")
        // }
        show () {
            alert("==============");
        }
    },
    mounted () {
        // 这种写法更灵活，在这可以进行很多灵活的操作，比如定时器
        // setTimeout(() => {
        //     // console.log(this);
        // 3 秒后执行回调函数，获取名字
        //     this.$refs.student.$on("custom", this.getStudentName);
        // }, 3000)

        // this.$refs.student.$on("custom", this.getStudentName); 

        // 这里必须写回调函数
        this.$refs.student.$on("custom", (name) => {
            this.studentName = name;
        }); 
        // 只触发一次，$on 改成 $once，custom 是自定义事件名称
        // this.$refs.student.$once("custom", this.getStudentName); 

        // 绑定第二个事件
        // this.$refs.student.$on("custom02", this.demo02);
    }
}
</script>
<style scoped>
    .app { background-color: gray; padding: 5px;}
</style>