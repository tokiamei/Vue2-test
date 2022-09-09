<template>
  <div>
    <ScopeSlotTest/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: { 
    ScopeSlotTest: () => import('./components/ScopeSlotTest/ScopeSlotTest.vue')
  },
};
</script>
