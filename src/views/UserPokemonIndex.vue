<template>
  <div class="user-pokemon-index">
    <!-- <br /> -->
    <form v-on:submit.prevent="userpAdd(user_pokemon)">
      <h1 style="font-family: PKMN RBYGSC; margin-top: 30px; margin-bottom: 40px; color: gold">Updating Pokémon</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>

      <div class="show-card" style="center">
        <!-- <div class="card-body" v-for="move in users" v-bind:key="move.id"> -->
        <div class="card-body" v-for="user_pokemon in user_pokemon" v-bind:key="user_pokemon.id">
          <p>Pokemon_id: {{ user_pokemon.pokemon_id }}</p>

          <p>Pokemon Name: {{ user_pokemon.pokemon_name }}</p>

          <button type="button" class="btn btn-danger" v-on:click="destroy(user_pokemon)">Delete</button>
          <br />
        </div>
        <h2>Add Pokemon:</h2>
        <label>Pokemon_id:</label>
        <input type="text" class="form-control" v-model="newpokemon_id" />
        <label>Pokemon Name:</label>
        <input type="text" class="form-control" v-model="newpokemon_name" />
        <button v-on:click="userpAdd" class="btn btn-primary">Add a Pokemon</button>
        <router-link v-bind:to="'../profile'"><button class="btn btn-primary">Return to Profile</button></router-link>
      </div>
    </form>
  </div>
</template>

<style>
.user-pokemon-index {
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
.show-card {
  opacity: 0.8;
  background-color: rgb(253, 255, 255);
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 30px;
  /* margin-bottom: 30px; */
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user_pokemon: [],
      errors: [],
      // user_id: this.user.id,
      newpokemon_id: "",
      newpokemon_name: "",
      currentPokemon: {},
    };
  },
  created: function () {
    this.userPokemon();
    this.userpAdd();
  },
  methods: {
    userPokemon: function () {
      axios.get("/api/user_pokemon").then((response) => {
        console.log(response.data);
        this.user_pokemon = response.data;
      });
    },
    userpAdd: function () {
      var params = {
        // user_id: this.user_id,
        pokemon_id: this.newpokemon_id,
        pokemon_name: this.newpokemon_name,
      };
      axios
        .post("/api/user_pokemon", params)
        .then((response) => {
          console.log("Updating");
          this.user_pokemon.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
    destroy: function (user_pokemon) {
      // this.currentPokemon = user_pokemon;
      axios.delete("/api/user_pokemon/" + user_pokemon.id).then(() => {
        var index = this.user_pokemon.indexOf(user_pokemon);
        this.user_pokemon.splice(index, 1);
      });
    },
  },
};
</script>
