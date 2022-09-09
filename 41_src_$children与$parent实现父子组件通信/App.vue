<template>
  <div>
    <ChildrenParentTest/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: { 
    ChildrenParentTest: () => import('./components/ChildrenParentTest/ChildrenParentTest.vue')
  },
};
</script>
