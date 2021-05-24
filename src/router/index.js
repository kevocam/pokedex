import { createRouter, createWebHashHistory } from "vue-router";

import Welcome from "../views/Welcome.vue";
import ListPokemons from "../views/ListPokemons.vue";
import ListFavorite from "../views/ListFavorite.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/list",
    name: "list",
    component: ListPokemons,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: ListFavorite,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
