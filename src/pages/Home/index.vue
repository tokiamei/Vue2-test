<template>
  <div>
    <h1>This is Home page</h1>
    <input type="text">
  </div>
</template>

<script>
export default {
  beforeDestroy() {
    console.log(`Home 被销毁了`);
  },
}
</script>

<style>

</style>