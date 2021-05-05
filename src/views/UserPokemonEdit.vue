<template>
  <div class="pokemon-edit">
    <form v-on:submit.prevent="userpEdit(userPokemon)">
      <h1 style="font-family: PKMN RBYGSC; margin-top: 30px; margin-bottom: 40px; color: gold">Updating Pokémon</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="row row-cols-2">
        <div class="col">
          <label>User_id:</label>
          <input type="text" class="form-control" v-model="user.id" />
        </div>
        <div class="col">
          <label>Pokemon_id:</label>
          <input type="text" class="form-control" v-model="user_pokemon.pokemon_id" />
        </div>
        <div class="col">
          <label>Pokemon Name:</label>
          <input type="text" class="form-control" v-model="user_pokemon.pokemon_name" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </div>
    </form>
  </div>
</template>

<style>
.pokemon-edit {
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
      userPokemon: [],
      errors: [],
    };
  },
  created: function () {
    axios.get("/api/user_pokemon/" + this.$route.params.id);
  },
  methods: {
    userpEdit: function (user_pokemon) {
      var params = {
        pokemon_id: user_pokemon.pokemon_id,
        pokemon_name: user_pokemon.pokemon_name,
      };
      axios.patch("/api/user_pokemon/" + this.user_pokemon.id, params).then(() => {
        console.log("Updating");
        this.$router.push("/../profile");
      });
    },
  },
};
</script>
