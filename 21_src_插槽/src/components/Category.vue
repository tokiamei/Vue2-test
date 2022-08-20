<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games">我是插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "超级玛丽", "魂斗罗", "QQ飞车"],
    };
  },
};
</script>

<style scoped>
.category {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
h3 {
  text-align: center;
  background-color: palevioletred;
}
</style>
