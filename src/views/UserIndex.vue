<template>
  <div class="users-index">
    <!-- <br /> -->
    <img
      style="margin-top: 20px"
      class="index-img"
      src="https://fontmeme.com/permalink/210504/df38d4e2efe8e0678f69651bb2222acd.png"
      alt="pokemon-font"
      border="0"
    />

    <h1></h1>

    <input type="search" style="center; font-size: 20px;" placeholder="search..." v-model="filterInput" />
    <h6 style="font-family: PKMN RBYGSC">Search by username</h6>
    <div class="show-card" style="center">
      <!-- <div class="card-body" v-for="move in users" v-bind:key="move.id"> -->
      <div class="card-body" v-for="user in filterBy(users, filterInput)" v-bind:key="user.id">
        <router-link v-bind:to="`users/${user.id}`">
          <h2 style="font-family: PKMN RBYGSC">{{ user.username }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.users-index {
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
.show-card {
  opacity: 0.8;
  background-color: rgb(253, 255, 255);
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 30px;
  /* margin-bottom: 30px; */
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      users: [],
      filterInput: "",
    };
  },
  created: function () {
    this.indexUsers();
  },
  methods: {
    indexUsers: function () {
      axios.get("/api/users").then((response) => {
        console.log(response.data);
        this.users = response.data;
      });
    },
  },
};
</script>
