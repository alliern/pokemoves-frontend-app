<template>
  <div class="pokemon-index">
    <div v-for="pokemon in pokemons" v-bind:key="pokemon.id">
      <h1>All Pokemon:</h1>
      <h2>{{ pokemon.region }}ian {{ pokemon.name }}</h2>
      <!-- <p>Region: {{ pokemon.region }}</p> -->
      <router-link v-bind:to="`pokemon/${pokemon.id}`">
        <img v-bind:src="pokemon.image" v-bind:alt="pokemon.name" />
      </router-link>
    </div>
  </div>
</template>

<style>
img {
  border-radius: 8px;
  width: 200px;
  height: 175px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      pokemons: [],
    };
  },
  created: function () {
    this.indexPokemon();
  },
  methods: {
    indexPokemon: function () {
      axios.get("/api/pokemon").then((response) => {
        console.log(response.data);
        this.pokemons = response.data;
      });
    },
    isGalarian: function () {},
  },
};
</script>
