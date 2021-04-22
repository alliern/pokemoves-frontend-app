<template>
  <div class="pokemon-index">
    <h1>All Pokemon:</h1>
    <div v-for="pokemon in pokemons" v-bind:key="pokemon.id">
      <h2 v-if="pokemon.region == 'Galar'">{{ pokemon.name }} ({{ pokemon.region }}ian)</h2>
      <h2 v-else-if="pokemon.region == 'Alola'">{{ pokemon.name }} ( {{ pokemon.region }}n)</h2>
      <h2 v-else>{{ pokemon.name }}</h2>
      <!-- <p v-if="pokemon.region != 'Kanto'">Region: {{ pokemon.region }}</p> -->
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
  },
};
</script>
