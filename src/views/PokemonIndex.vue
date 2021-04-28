<template>
  <div class="pokemon-index">
    <section class="page-section bg-light" id="portfolio">
      <h1>All Pokemon:</h1>
      <!-- <div v-for="pokemon in pokemons" v-bind:key="pokemon.id"> -->
      <div class="container">
        <div class="column is-one-third" v-for="pokemon in pokemons" v-bind:key="pokemon.id">
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
                <h2 class="portfolio-caption-heading" v-if="pokemon.region == 'Galar'">
                  {{ pokemon.name }} ({{ pokemon.region }}ian)
                </h2>
                <h2 class="portfolio-caption-heading" v-else-if="pokemon.region == 'Alola'">
                  {{ pokemon.name }} ({{ pokemon.region }}n)
                </h2>
                <h2 class="portfolio-caption-heading" v-else>{{ pokemon.name }}</h2>
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
  background-size: 1000px;
}
.portfolio-caption {
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
