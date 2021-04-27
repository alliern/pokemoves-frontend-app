<template>
  <div class="pokemon-index">
    <section class="page-section" id="portfolio">
      <h1>All Pokemon:</h1>
      <div v-for="pokemon in pokemons" v-bind:key="pokemon.id">
        <!-- <p v-if="pokemon.region != 'Kanto'">Region: {{ pokemon.region }}</p> -->

        <div class="container">
          <div class="text-center">
            <!-- <h2 class="section-heading text-uppercase">All Pokemon</h2> -->
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <router-link class="portfolio-link" data-toggle="modal" v-bind:to="`pokemon/${pokemon.id}`">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                  </div>
                  <!-- <router-link v-bind:to="`pokemon/${pokemon.id}`"> -->
                  <img class="pokemon-img" v-bind:src="pokemon.image" v-bind:alt="pokemon.name" />
                  <!-- </router-link> -->
                </router-link>
                <div class="portfolio-caption">
                  <h2 v-if="pokemon.region == 'Galar'">{{ pokemon.name }} ({{ pokemon.region }}ian)</h2>
                  <h2 v-else-if="pokemon.region == 'Alola'">{{ pokemon.name }} ( {{ pokemon.region }}n)</h2>
                  <h2 v-else>{{ pokemon.name }}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.pokemon-img {
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
