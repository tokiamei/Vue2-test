<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear>
      <h1 v-show="isShow">你好吗？</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
/* 假如不用 Vue 封装的动画 API，用 CSS 也能实现，再利用 js 进行动画切换 */
.v-enter-active {
  animation: appear 1s linear;
}
.v-leave-active {
  animation: appear 1s linear reverse;
}
@keyframes appear {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
