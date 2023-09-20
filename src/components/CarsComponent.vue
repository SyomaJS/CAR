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

  router.push({
    name: "CarDetail", // Use the route name defined in your router
    query: { car: car.id },
  });
}
</script>

<style lang="scss" scoped>
.router-link {
  text-decoration: none;
  color: black;
}

h1 {
  color: white;
}

.row {
  background: url(../assets/bmw_background.jpg),
    rgb(0, 0, 0) 50% / cover no-repeat;
  background-size: 100%;
  height: 100vh;
}
</style>
