<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="../../images/328334.jpg" alt="">
      <a slot="footer" href="#">好看的小姐姐</a>
    </category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{game}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="../../Videos/难破船.mp4"></video>
      <template slot="footer">
        <div class="foot">
        <a href="#">经典</a>
        <a href="#">热门</a>
        <a href="#">推荐</a>
      </div>
      <h4>欢迎观看！</h4>
      </template>
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
</script>

<style  scoped>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}
video {
  width: 100%;
}
a {
  text-decoration: none;
}
h4 {
  text-align: center;
}
</style>
