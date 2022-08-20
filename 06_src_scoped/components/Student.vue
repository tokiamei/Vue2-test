<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>  
    <h2>学生性别：{{ gender }}</h2>  
  </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
          name: "赫敏",
          gender: "女"
        }
    },
}
</script>

<style scoped>
  .demo {
    background-color: deeppink;
  }
</style>