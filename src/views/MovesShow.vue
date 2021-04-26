<template>
  <div class="move-show">
    <div class="container">
      <h2>{{ move.name }}</h2>
      <p>
        <b>Type:</b>
        {{ move.type_0 }}
      </p>
      <p>
        <b>HM or TM:</b>
        {{ move.hm_tm }}
      </p>
      <p>
        <b><strong>Category:</strong></b>
        {{ move.category }}
      </p>
    </div>
    <div class="pokemon-moves">
      <h2>Pokemon who can learn this move:</h2>
      <li v-for="pokemon in showPokemon" v-bind:key="pokemon.id">
        <router-link v-bind:to="`../pokemon/${pokemon.id}`">{{ pokemon.name }}</router-link>
      </li>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      move: {},
    };
  },
  computed: {
    showPokemon: function () {
      return this.move.pokemon;
    },
  },
  created: function () {
    this.showmove();
  },
  methods: {
    showmove: function () {
      axios.get("/api/moves/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.move = response.data;
      });
    },
  },
};
</script>
