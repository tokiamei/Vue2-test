<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
      <slot name="center">我是中心插槽</slot>
      <slot name="footer">我是一个底部插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
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
