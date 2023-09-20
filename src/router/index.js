import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Cars from "../views/CarsView.vue";
import Car from "../views/CarView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/cars",
    name: "cars",
    component: Cars,
  },

  {
    path: "/car/:id",
    name: "CarDetail",
    component: Car,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
