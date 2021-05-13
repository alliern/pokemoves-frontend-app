<template>
  <div class="home">
    <p v-if="isLoggedIn()">Hello, {{ user.username }}</p>
    <img class="home-img" src="https://fontmeme.com/permalink/210428/e8c7e5b709234d03a7d492f36cd6e5fd.png" />
    <br />
    <p style="font-size: 18px">Your database for Pokémon and their battle moves</p>
  </div>
</template>

<style>
.home-img {
  width: 700px;
  height: 195px;
  margin-top: 10px;
  margin-bottom: 5px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: [],
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
      axios.get("/api/profile").then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
  },
};
</script>
