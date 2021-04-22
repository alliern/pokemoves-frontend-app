<template>
  <div class="pokemon-show">
    <div class="container">
      <img v-bind:src="pokemon.image" v-bind:alt="pokemon.title" />
      <h1>{{ pokemon.name }}</h1>
      <p>Region: {{ pokemon.region }}</p>
      <p>Type 1: {{ pokemon.type_1 }}</p>
      <p>Type 2: {{ pokemon.type_2 }}</p>
    </div>
    <div class="moveset">
      <h1>Moves</h1>
      <p>{{ moves.move_name }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      pokemon: {},
      moves: {},
    };
  },
  created: function () {
    this.showPokemon();
    this.showPokeMoves();
  },
  methods: {
    showPokemon: function () {
      axios.get("/api/pokemon/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.pokemon = response.data;
      });
    },
  },
  showPokeMoves: function () {
    var params = this.pokemon.id;

    axios.get("/api/poke_moves/" + params).then((response) => {
      console.log(response.data);
      this.moves = response.data;
    });
  },
};
</script>
