<template>
  <div class="move-show">
    <div class="card" style="center">
      <div class="card-body">
        <h1 class="card-title" style="font-family: PKMN RBYGSC">{{ move.name }}</h1>
      </div>
      <div class="card-body">
        <li class="list-group-item">
          <p>
            <b>TYPE:</b>
            {{ move.type_0 }}
          </p>
          <p>
            <b>HM / TM:</b>
            {{ move.hm_tm }}
          </p>
          <p>
            <b><strong>CATEGORY:</strong></b>
            {{ move.category }}
          </p>
        </li>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" style="strong">Pokemon who can learn this move:</li>
        <p v-for="pokemon in showPokemon" v-bind:key="pokemon.id">
          <router-link v-bind:to="`../pokemon/${pokemon.id}`">{{ pokemon.name }}</router-link>
        </p>
      </ul>
    </div>
  </div>
</template>

<style>
.move-show {
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}
</style>

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
