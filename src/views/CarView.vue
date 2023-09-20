<template>
  <div class="contianer">
    <CarComponent :data="car" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.query);
</script>

<style lang="scss" scoped>
.router_link {
  text-decoration: none;
  color: white;
}
</style>
