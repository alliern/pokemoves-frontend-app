import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PokemonIndex from "../views/PokemonIndex.vue";
import PokemonShow from "../views/PokemonShow.vue";
import MovesIndex from "../views/MovesIndex.vue";
Vue.use(VueRouter);
import MovesShow from "../views/MovesShow.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemon",
    name: "PokemonIndex",
    component: PokemonIndex,
  },
  {
    path: "/pokemon/:id",
    name: "PokemonShow",
    component: PokemonShow,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ "../views/PokemonIndex.vue"),
  },
  {
    path: "/moves",
    name: "MovesIndex",
    component: MovesIndex,
  },
  {
    path: "/moves/:id",
    name: "MovesShow",
    component: MovesShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
