<template>
  <div class="contianer">
    <Cars :data="cars" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import Cars from "../components/CarsComponent.vue";



const route = useRoute();
console.log(route);

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
</script>

<style lang="scss" scoped>
.router_link {
  text-decoration: none;
  color: white;
}
</style>
