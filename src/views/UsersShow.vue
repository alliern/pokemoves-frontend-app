<template>
  <div class="user-show">
    <div class="container">
      <h2>{{ user.name }}'s Profile</h2>
      <p>
        {{ user.pokemon_1 }}
        {{ user.pokemon_2 }}
        {{ user.pokemon_3 }}
        {{ user.pokemon_4 }}
        {{ user.pokemon_5 }}
        {{ user.pokemon_6 }}
      </p>
    </div>
    <button type="button" class="btn btn-outline-primary"></button>
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
      axios.get("/api/users/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
  },
};
</script>
