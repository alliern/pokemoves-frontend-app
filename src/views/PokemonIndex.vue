<template>
  <div class="pokemon-index">
    <section class="page-section bg-light" id="portfolio">
      <h1 style="font-family: PKMN RBYGSC">All Pokemon:</h1>
      <!-- <div v-for="pokemon in pokemons" v-bind:key="pokemon.id"> -->
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col" v-for="pokemon in pokemons" v-bind:key="pokemon.id">
          <div class="col-lg-4 col-sm-5 mb-4">
            <div class="portfolio-item">
              <router-link class="portfolio-link" data-toggle="modal" v-bind:to="`pokemon/${pokemon.id}`">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content"></div>
                </div>
                <!-- <router-link v-bind:to="`pokemon/${pokemon.id}`"> -->
                <img class="img-fluid" v-bind:src="pokemon.image" v-bind:alt="pokemon.name" />
                <!-- </router-link> -->
              </router-link>
              <div class="portfolio-caption">
                <h2 class="portfolio-caption-heading" style="font-family: PKMN RBYGSC" v-if="pokemon.region == 'Galar'">
                  {{ pokemon.name }} ({{ pokemon.region }}ian)
                </h2>
                <h2
                  class="portfolio-caption-heading"
                  style="font-family: PKMN RBYGSC"
                  v-else-if="pokemon.region == 'Alola'"
                >
                  {{ pokemon.name }} ({{ pokemon.region }}n)
                </h2>
                <h2 class="portfolio-caption-heading" style="font-family: PKMN RBYGSC" v-else>{{ pokemon.name }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </section>
  </div>
</template>

<style>
.page-section {
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: cover;
  background-attachment: fixed;
}
.pokemon-index {
  font-family: "PKMN RBYGSC";
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
