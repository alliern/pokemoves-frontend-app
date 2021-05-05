<template>
  <div class="profile">
    <!-- <section class="party-icons" id="team"> -->
    <div class="container">
      <div class="text-center">
        <h1 style="font-family: PKMN RBYGSC; margin-top: 20px" class="section-heading">{{ user.username }}'s Party</h1>
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <button
            type="button"
            class="btn btn-outline-primary"
            style="margin-bottom: 30px; margnin-right: 20px; margin-top: 15px"
          >
            Edit Profile
          </button>
        </a>

        <router-link v-bind:to="`../user_pokemon`">
          <button
            type="button"
            class="btn btn-outline-primary"
            style="margin-bottom: 30px; margin-left: 20px; margin-top: 15px"
          >
            Edit Party
          </button>
        </router-link>

        <h1></h1>
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="pokemon in limitBy(showUserP, 6)" v-bind:key="pokemon.id">
          <div class="team-member">
            <router-link v-bind:to="`../pokemon/${pokemon.id}`">
              <img class="mx-auto rounded-circle" src="https://pngimg.com/uploads/pokeball/pokeball_PNG8.png" alt="" />
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
    <div
      style="opacity: 0.9"
      class="portfolio-modal modal fade"
      id="portfolioModal1"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project Details Go Here-->
                  <h2 style="margin-bottom: 40px; color: green; font-family: PKMN RBYGSC">Update Profile</h2>
                  <h1></h1>
                  <div class="edit">
                    <form v-on:submit.prevent="userUpdate(user)">
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
                      </div>

                      <input type="submit" class="btn btn-primary" value="Submit" />
                    </form>
                  </div>

                  <button class="btn btn-warning" data-dismiss="modal" type="button">
                    <i class="fas fa-times mr-1"></i>
                    Close
                  </button>
                </div>
              </div>
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
.portfolioModal1 {
  background: center;
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
      axios.get("/api/profile").then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
    userUpdate: function (user) {
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
        // this.$router.push("/../profile");
      });
    },
  },
};
</script>
