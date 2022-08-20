<template>
  <ul>
    <li>消息编号：{{id}}</li>
    <li>消息标题：{{title}}</li>
    <!-- <h2>a:{{a}} b:{{b}}</h2> -->
  </ul>
</template>

<script>
export default {
    name: "Detail",
    props: ["id", "title"]
}
</script>

<style>

</style>