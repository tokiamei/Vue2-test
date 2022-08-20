<template>
  <div class="demo">
    <h1>{{ name }}--{{ address }}</h1>
    <button @click="showName">点击提示学校名</button>
  </div>
</template>

<script>
    // 直接暴露组件的配置对象
    export default {
        name: "SchoolName",
        data() {
            return { name: '霍格沃茨', address: "England" }
        },
        methods: {
            showName() {
                alert(this.name)
            }
        }
    };
</script>

<style>
    .demo {
        background-color: deeppink;
    }
</style>