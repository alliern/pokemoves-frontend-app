<template>
  <div class="profile">
    <div class="container">
      <div class="text-center">
        <h1 style="font-family: PKMN RBYGSC" class="section-heading">{{ user.username }}'s Party</h1>

        <br />
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="pokemon in limitBy(showUserP, 6)" v-bind:key="pokemon.id">
          <div class="team-member">
            <router-link v-bind:to="`../pokemon/${pokemon.id}`">
              <img
                class="mx-auto rounded-circle"
                v-bind:src="pokemon"
                alt=""
                onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
              />
            </router-link>
            <div v-if="pokemon.region == 'Galar'">
              <h4 style="font-family: PKMN RBYGSC">Galarian {{ pokemon.name }}</h4>
            </div>
            <div v-else-if="pokemon.region == 'Alola'">
              <h4 style="font-family: PKMN RBYGSC">Alolan {{ pokemon.name }}</h4>
            </div>
            <div v-else>
              <h4 style="font-family: PKMN RBYGSC">{{ pokemon.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.profile {
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      user: {},
      errors: [],
    };
  },
  computed: {
    showUserP: function () {
      return this.user.pokemons;
    },
  },
  created: function () {
    this.showUser();
  },
  methods: {
    showUser: function () {
      axios.get("/api/users/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
  },
};
</script>
