<template>
  <div class="row d-flex justify-content-center align-content-center">
    <h1>Cars</h1>
    <div class="col-12 d-flex align-content-center justify-content-center">
      <div class="card-deck d-flex justify-content-center gap-5">
        <div
          v-for="(car, index) in props.data"
          :key="index"
          class="card col-3"
          @click="customFunction(car)"
        >
          <div class="card-header">
            {{ car.car_name }}
          </div>
          <div class="card-body">
            {{ car.model }}
          </div>
          <div class="card-body">
            <img
              :src="require(`@/assets/${car.photo}`)"
              class="card-img-top"
              alt="Car Photo"
            />
          </div>
          <div class="card-footer">
            {{ car.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  data: Array,
});

const router = useRouter();

function customFunction(car) {
  console.log("Card clicked! Custom function executed.");

  // Optionally, you can navigate to a route here
  router.push({
    path: `/car/${car.id}`,
    query: { car: car.id },
  });
}
</script>

<style lang="scss" scoped>
.router-link {
  text-decoration: none;
  color: black;
}

.row {
  background: rgb(0, 85, 142);
  background: linear-gradient(
    0deg,
    rgba(0, 85, 142, 1) 6%,
    rgba(255, 255, 255, 1) 76%
  );
  height: 100vh;
}
</style>
