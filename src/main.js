import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";
axios.defaults.baseURL = process.env.NODE_ENV === "production" ? "https://pokemoves-backend.herokuapp.com" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
