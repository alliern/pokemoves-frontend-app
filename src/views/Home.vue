<template>
  <div class="home">
    <p v-if="isLoggedIn()">Hello, {{ user }}</p>
    <img src="https://fontmeme.com/permalink/210427/48c8c743154f925a08c2bdbf9561d7aa.png" />
  </div>
</template>

<style>
img {
  width: 700px;
  height: 180px;
}
/* body {
  background-image: url("https://i.pinimg.com/originals/1c/a6/e1/1ca6e1c35e2d884230242cc0326dbf28.jpg");
  background-size: 1400px;
} */
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
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
