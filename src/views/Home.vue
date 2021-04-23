<template>
  <div class="home">
    <p v-if="isLoggedIn()">Hello, {{ user }}</p>
    <h1>{{ message }}</h1>
    <img src="https://cdn3.whatculture.com/images/2019/04/412ce4a582a0e809-1200x675.jpg" />
  </div>
</template>

<style>
body {
  background-color: aqua;
}
#img {
  width: 2000px;
  height: 1075px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to PokéMoves!",
      user: this.user.username,
    };
  },
  created: function () {
    this.showUser();
  },
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    showUser: function () {
      axios.get("/api/users/profile").then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
  },
};
</script>
