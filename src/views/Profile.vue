<template>
  <div class="user-show">
    <div class="container">
      <h2>{{ user.username }}'s Party</h2>

      <br />
      {{ user.pokemon_1 }}
      <br />
      <br />
      {{ user.pokemon_2 }}
      <br />
      <br />
      {{ user.pokemon_3 }}
      <br />
      <br />
      {{ user.pokemon_4 }}
      <br />
      <br />
      {{ user.pokemon_5 }}
      <br />
      <br />
      {{ user.pokemon_6 }}
      <br />
    </div>
    <button type="button" class="btn btn-outline-primary">
      <router-link v-bind:to="`users/${user.id}/edit`">Edit Profile</router-link>
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
    };
  },
  created: function () {
    this.showUser();
  },
  methods: {
    showUser: function () {
      axios.get("/api/profile").then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
  },
};
</script>
