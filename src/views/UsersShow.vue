<template>
  <div class="profile">
    <!-- <section class="party-icons" id="team"> -->
    <div class="container">
      <div class="text-center">
        <h1 style="font-family: PKMN RBYGSC" class="section-heading">{{ user.username }}'s Party</h1>
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <button type="button" class="btn btn-outline-primary">
            <!-- <router-link v-bind:to="`users/${user.id}/edit`">Edit Profile</router-link> -->
            Edit Profile
          </button>
        </a>
        <h1></h1>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="team-member">
            <router-link v-bind:to="'pokemon/3'">
              <img
                class="mx-auto rounded-circle"
                src="user.pokemon_1"
                alt=""
                onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
              />
            </router-link>

            <h4 style="font-family: PKMN RBYGSC">{{ user.pokemon_1 }}</h4>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="team-member">
            <router-link v-bind:to="'pokemon/1'">
              <img
                class="mx-auto rounded-circle"
                src="user.pokemon_1"
                alt=""
                onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
              />
            </router-link>
            <h4 style="font-family: PKMN RBYGSC">{{ user.pokemon_2 }}</h4>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="team-member">
            <router-link v-bind:to="'pokemon/4'">
              <img
                class="mx-auto rounded-circle"
                src="user.pokemon_1"
                alt=""
                onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
              />
            </router-link>
            <h4 style="font-family: PKMN RBYGSC">{{ user.pokemon_3 }}</h4>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="team-member">
            <router-link v-bind:to="'pokemon/2'">
              <img
                class="mx-auto rounded-circle"
                src=""
                alt=""
                onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
              />
            </router-link>
            <h4 style="font-family: PKMN RBYGSC">{{ user.pokemon_4 }}</h4>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="team-member">
            <router-link v-bind:to="'pokemon/5'">
              <img
                class="mx-auto rounded-circle"
                v-bind:src="'https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
                alt=""
                onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
              />
            </router-link>
            <h4 style="font-family: PKMN RBYGSC">{{ user.pokemon_5 }}</h4>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="team-member">
            <template v-if="user.pokemon_6 == null">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <img
                  class="mx-auto rounded-circle"
                  src="http://www.clipartbest.com/cliparts/bcy/77L/bcy77LGRi.gif"
                  alt=""
                  onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
                />
              </a>
              <h4 style="font-family: PKMN RBYGSC">Add Pokemon</h4>
            </template>
            <template v-else>
              <router-link v-bind:to="'/pokemon'">
                <img
                  class="mx-auto rounded-circle"
                  src="user.pokemon_1"
                  alt=""
                  onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
                />
              </router-link>
              <h4 style="font-family: PKMN RBYGSC">{{ user.pokemon_6 }}</h4>
            </template>
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
                        <!-- </div> -->

                        <!-- <div class="row row-cols-2"> -->
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
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      errors: [],
    };
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
