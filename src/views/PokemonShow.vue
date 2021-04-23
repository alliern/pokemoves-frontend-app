<template>
  <div class="pokemon-show">
    <div class="container">
      <img v-bind:src="pokemon.image" v-bind:alt="pokemon.title" />
      <h1>{{ pokemon.name }}</h1>
      <p>
        <strong>Region:</strong>
        {{ pokemon.region }}
      </p>
      <p>
        <strong>Type 1:</strong>
        {{ pokemon.type_1 }}
      </p>
      <p>
        <strong>Type 2:</strong>
        {{ pokemon.type_2 }}
      </p>
    </div>
    <div class="moveset">
      <h1>Moves</h1>
      <li v-for="poke_move in showMoves" v-bind:key="poke_move.id">
        <strong>Name:</strong>
        {{ poke_move.move_name }},
        <strong>Learned by HM or TM:</strong>
        {{ poke_move.hm_tm }},
        <strong>Learned by leveling up:</strong>
        {{ poke_move.leveling }}

        <!-- <p>
        <strong>Name:</strong>
        {{ pokemon.poke_moves[1]["move_name"] }}
      </p>
      <strong>Learned by:</strong>
      <p>
        <strong>HM or TM:</strong>
        {{ pokemon.poke_moves[1]["hm_tm"] }}
      </p>
      <p>
        <strong>Leveling up:</strong>
        {{ pokemon.poke_moves[1]["leveling"] }}
      </p> -->
      </li>
    </div>
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
  computed: {
    showMoves: function () {
      return this.pokemon.poke_moves;
    },
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
    // moves: function () {
    //   var i = 0;
    //   while (i < this.pokemon.poke_moves.length) {

    //   }
  },
};
</script>
