<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>  
    <h2>学生性别：{{ gender }}</h2>  
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑自定义事件</button>
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
    methods: {
      sendStudentName() {
        // 利用自定义事件来实现子给父传数据，第一个参数和父组件事件名一致，第二个参数是参数
        this.$emit("custom", this.name);
        // this.$emit("custom02") // 再绑定一个时间看看
      },
      unbind () {
        // 解绑事件
        this.$off("custom"); // 解绑单个事件
        // this.$off("custom", "custom02"); // 这样写解绑直接失效，解绑多个时间不能这么写
        // this.$off(["custom", "custom02"]); // OK，解绑多个事件，就把事件放到数组里面
        // this.$off(); // 解绑全部自定义事件
      },
    },
}
</script>

<style scoped>
  .student {
    background-color: deeppink;
    padding: 5px;
    margin-top: 30px;
  }
</style>