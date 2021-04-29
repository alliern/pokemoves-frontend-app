<template>
  <div class="edit">
    <form v-on:submit.prevent="userEdit(user)">
      <h1 style="font-family: PKMN RBYGSC; margin-top:30px; margin-bottom: 40px; color: yellow">Updating Profile</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="row row-cols-2">
        <div class="col">
          <label>Username:</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="col">
          <label>Email:</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <div class="col">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="user.password" />
        </div>
        <div class="col">
          <label>Conf. Pswrd:</label>
          <input type="password" class="form-control" v-model="user.passwordConfirmation" />
        </div>
        <div class="col">
          <label>Pokemon 1:</label>
          <input type="text" class="form-control" v-model="user.pokemon_1" />
        </div>
        <div class="col">
          <label>Pokemon 2:</label>
          <input type="text" class="form-control" v-model="user.pokemon_2" />
        </div>
        <div class="col">
          <label>Pokemon 3:</label>
          <input type="text" class="form-control" v-model="user.pokemon_3" />
        </div>
        <div class="col">
          <label>Pokemon 4:</label>
          <input type="text" class="form-control" v-model="user.pokemon_4" />
        </div>
        <div class="col">
          <label>Pokemon 5:</label>
          <input type="text" class="form-control" v-model="user.pokemon_5" />
        </div>
        <div class="col">
          <label>Pokemon 6:</label>
          <input type="text" class="form-control" v-model="user.pokemon_6" />
        </div>
      </div>
      <input type="submit" class="btn btn-primary" value="Submit"/>
    </form>
  </div>
</template>

<style>
.edit {
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: [],
      errors: [],
    };
  },
  created: function () {
    axios.get("/api/users/" + this.$route.params.id);
  },
  methods: {
    userEdit: function (user) {
      var params = {
        username: user.username,
        email: user.email,
        password: user.password,
        passwordConfirmation: user.password_confirmation,
        pokemon_1: user.pokemon_1,
        pokemon_2: user.pokemon_2,
        pokemon_3: user.pokemon_3,
        pokemon_4: user.pokemon_4,
        pokemon_5: user.pokemon_5,
        pokemon_6: user.pokemon_6,
      };
      axios.patch("/api/users/" + this.user.id, params).then(() => {
        console.log("Updating");
        this.$router.push("/../profile");
      });
    },
  },
};
</script>
