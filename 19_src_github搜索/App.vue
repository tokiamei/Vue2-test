<template>
    <div class="container">
      <Search/>
      <List/>
    </div>
</template>

<script>
import Search from "./components/Search.vue"
import List from "./components/List"
export default {
  name: "App",
  components: { Search, List }
};
</script>

<style>

</style>
