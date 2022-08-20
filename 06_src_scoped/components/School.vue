<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>  
    <h2>学校地址：{{ address }}</h2>  
  </div>
</template>

<script>
export default {
    name: "School",
    data() {
        return {
          name: "霍格沃茨魔法学院",
          address: "England"
        }
    },
}
</script>

<style scoped>
  .demo {
    background-color: skyblue;
  }
</style>
<style lang="">
  
</style>