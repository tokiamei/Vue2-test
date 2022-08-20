<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>  
    <h2>学生性别：{{ gender }}</h2>  
    <button @click="sendStudentName">点击给学校组件传数据</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
    name: "Student",
    data() {
        return {
          name: "赫敏",
          gender: "女"
        }
    },
    methods: {
      sendStudentName () {
        // this.$bus.$emit("hello", this.name);
        pubsub.publish("hello", 666);
      }
    }
}
</script>

<style scoped>
  .student {
    background-color: deeppink;
    padding: 5px;
    margin-top: 30px;
  }
</style>