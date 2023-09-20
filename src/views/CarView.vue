<template>
  <div class="contianer">
    <CarComponent :data="car_id" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import CarComponent from "../components/CarComponent.vue";
import { ref } from "vue";
const route = useRoute();
console.log("here");
const car_id = ref(route.query.car);
</script>


<style lang="scss" scoped>
.router_link {
  text-decoration: none;
  color: white;
}
</style>
