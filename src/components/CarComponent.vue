<template>
  <div class="row d-flex justify-content-center align-content-center">
    <h1>Car</h1>
    <div class="col-12 d-flex align-content-center justify-content-center">
      <div
        class="card-deck d-flex justify-content-center gap-5 align-content-center"
      >
        <div
          v-for="(car, index) in cars"
          :key="index"
          class="d-flex justify-content-center"
        >
          <div v-if="car.id == props.data" class="card col-6">
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
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const cars = ref([
  {
    id: 1,
    car_name: "BMW",
    model: "M5 Compitition",
    description:
      "BMW M5 Compitition-  автоспорта BMW , BMW M В рамках перенумерации, которая разделяет модели купе и кабриолеты 3 серии от 4-я серия Википедия  site:wiki5.ru",
    photo: "bmw-1.jpg",
  },
  {
    id: 2,
    car_name: "BMW",
    model: "M5 F90",
    description:
      "BMW M5 - высокопроизводительная версия BMW 4 серии. купе и кабриолеты, разработанные подразделением автоспорта BMW , BMW M В рамках перенумерации, которая разделяет модели купе и кабриолеты 3 серии от 4-я серия Википедия  site:wiki5.ru",

    photo: "bmw-2.jpg",
  },
  {
    id: 3,
    car_name: "BMW",
    model: "M5 CS",
    description:
      "BMW M5 CS - высокопроизводительная версия BMW 4 серии. купе и кабриолеты, разработанные В рамках перенумерации, которая разделяет модели купе и кабриолеты 3 серии от 4-я серия Википедия  site:wiki5.ru",
    photo: "bmw-3.jpg",
  },
]);

console.log("here");
const props = defineProps({
  data: String,
});
</script>

<style lang="scss">
.row {
  background: url(../assets/bmw_background.jpg),
    rgb(0, 0, 0) 50% / cover no-repeat;
  background-size: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
}
</style>
