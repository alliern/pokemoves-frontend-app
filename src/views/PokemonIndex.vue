<template>
  <div class="pokemon-index">
    <h1 style="font-family: PKMN RBYGSC">All Pokemon:</h1>
    <br />
    <div class="row row-cols-1 row-cols-sm-3 g-4">
      <div class="col" v-for="pokemon in pokemons" v-bind:key="pokemon.id">
        <div class="card h-100">
          <router-link v-bind:to="`pokemon/${pokemon.id}`">
            <img class="img-fluid" v-bind:src="pokemon.image" v-bind:alt="pokemon.name" />
          </router-link>
          <div class="card-body">
            <p class="card-text" style="font-family: PKMN RBYGSC" v-if="pokemon.region == 'Galar'">
              {{ pokemon.name }} ({{ pokemon.region }}ian)
            </p>
            <p class="card-text" style="font-family: PKMN RBYGSC" v-else-if="pokemon.region == 'Alola'">
              {{ pokemon.name }} ({{ pokemon.region }}n)
            </p>
            <p class="card-text" style="font-family: PKMN RBYGSC" v-else>{{ pokemon.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.pokemon-index {
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
.pokemon-index {
  font-family: "PKMN RBYGSC";
  margin-top: 30px;
}
.card {
  opacity: 0.8;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 15px;
}
.row {
  margin-left: 30px;
  margin-right: 30px;
}
.col {
  margin-top: 10px;
  margin-bottom: 10px;
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
