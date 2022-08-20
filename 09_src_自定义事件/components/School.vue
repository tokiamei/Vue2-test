<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>  
    <h2>学校地址：{{ address }}</h2>  
    <button @click="handleGetSchoolName()">把学校名给App</button>
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
    // 这里用 props 实现子给父传数据
    props: ["getSchoolName"],
    methods: {
      // 调用父组件传过来的函数，并把参数放进去
      handleGetSchoolName() {
        this.getSchoolName(this.name);
      }
    }
}
</script>

<style scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>