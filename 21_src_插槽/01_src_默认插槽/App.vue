<template>
  <div class="container">
    <Category title="美食">
      <img src="../../images/328334.jpg" alt="">
    </category>

    <Category title="游戏">
      <li v-for="(game, index) in games" :key="index">{{game}}</li>
    </Category>
    <Category title="电影">
      <video controls src="../../Videos/难破船.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "超级玛丽", "魂斗罗", "QQ飞车"],
      films: ["肖申克的救赎", "天堂电影院", "侏罗纪公园", "名侦探柯南"],
    };
  },
};
</script scoped>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
