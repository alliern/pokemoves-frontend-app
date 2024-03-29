import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PokemonIndex from "../views/PokemonIndex.vue";
import PokemonShow from "../views/PokemonShow.vue";
import MovesIndex from "../views/MovesIndex.vue";
Vue.use(VueRouter);
import MovesShow from "../views/MovesShow.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UsersShow from "../views/UsersShow.vue";
import Profile from "../views/Profile.vue";
import UserEdit from "../views/UserEdit.vue";
import UserIndex from "../views/UserIndex.vue";
import UserPokemonIndex from "../views/UserPokemonIndex.vue";

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
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/users",
    name: "user index",
    component: UserIndex,
  },
  {
    path: "/users/:id",
    name: "user show",
    component: UsersShow,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/users/:id/edit",
    name: "user edit",
    component: UserEdit,
  },
  {
    path: "/user_pokemon",
    name: "user pokemon",
    component: UserPokemonIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
