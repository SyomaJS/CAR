<template>
  <div>
    <h1>Car Details</h1>
    <div class="card">
      <div class="card-header">
        {{ data.car_name }}
      </div>
      <div class="card-body">
        {{ data.model }}
      </div>

      {{ $route.query.id }}
      <div class="card-body">
        <img
          :src="require(`@/assets/${data.photo}`)"
          class="card-img-top"
          alt="Car Photo"
        />
      </div>
      <div class="card-footer">
        {{ data.description }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";


const car = $route.query.id;
console.log(car.$props);

const props = defineProps({
  data: Array,
});
</script>
