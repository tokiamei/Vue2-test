<template>
  <div class="container">
    <Category title="游戏">
      <!-- 解构赋值 -->
      <template scope="{games}">
        <!-- {{tokiame}} -->
        <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      </template>
    </Category>

    <Category title="游戏"> 
      <template scope="{games}">
        <ol>
        <li style="color:deeppink" v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ol>
      </template>
    </Category>
    
    <Category title="游戏"> 
      <template scope="{games}">
        <h4 style="color:deeppink" v-for="(game, index) in games" :key="index">{{ game }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}
video {
  width: 100%;
}
.slot {
}
a {
  text-decoration: none;
}
h4 {
  text-align: center;
}
</style>
