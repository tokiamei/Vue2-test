<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "App",
  methods: {
    getStudents () {
      // 第二种代理方式：把前缀名卸载端口号的后面 
      axios.get("http://localhost:8080/tokiame/students").then(
        response => { console.log("请求成功了", response.data) },
        error => { console.log("请求失败了", error.message) }
      )
    },
    getCars () {
      axios.get("http://localhost:8080/demo/cars").then(
        response => { console.log("访问到汽车的数据了", response.data) },
        error => {console.log("访问失败了", error.message)}
      )
    }
  }
};
</script>
