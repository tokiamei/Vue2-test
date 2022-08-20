<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>  
    <h2>学生性别：{{ gender }}</h2>  
    <button @click="showName">点击显示姓名</button>
  </div>
</template>

<script>
import {hunhe} from "../mixin"
export default {
    name: "Student",
    data() {
        return {
          name: "赫敏",
          gender: "女"
        }
    },
    mixins: [hunhe]
}
</script>