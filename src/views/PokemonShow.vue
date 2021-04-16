<template>
  <div class="pokemon-show">
    <div class="container">
      <img v-bind:src="pokemon.image" v-bind:alt="pokemon.title" />
      <h2>{{ pokemon.name }}</h2>
      <p>Region: {{ pokemon.region }}</p>
      <p>Type 1: {{ pokemon.type_1 }}</p>
      <p>Type 2:{{ pokemon.type_2 }}</p>
    </div>
    <button type="button" class="btn btn-outline-primary"></button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      pokemon: {},
    };
  },
  created: function () {
    this.showPokemon();
  },
  methods: {
    showPokemon: function () {
      axios.get("/api/pokemon/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.pokemon = response.data;
      });
    },
  },
};
</script>
