<template>
  <div class="profile">
    <!-- <section class="party-icons" id="team"> -->
    <div class="container">
      <div class="text-center">
        <h1 style="font-family: PKMN RBYGSC" class="section-heading">{{ user.username }}'s Party</h1>
        <button type="button" class="btn btn-outline-primary">
          <router-link v-bind:to="`users/${user.id}/edit`">Edit Profile</router-link>
        </button>
        <h1></h1>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="team-member">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
              <img
                class="mx-auto rounded-circle"
                src="user.pokemon_1"
                alt=""
                onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
              />
            </a>
            <h4 style="font-family: PKMN RBYGSC">{{ user.pokemon_1 }}</h4>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="team-member">
            <img
              class="mx-auto rounded-circle"
              src="user.pokemon_1"
              alt=""
              onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
            />
            <h4 style="font-family: PKMN RBYGSC">{{ user.pokemon_2 }}</h4>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="team-member">
            <img
              class="mx-auto rounded-circle"
              src="user.pokemon_1"
              alt=""
              onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
            />
            <h4 style="font-family: PKMN RBYGSC">{{ user.pokemon_3 }}</h4>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="team-member">
            <img
              class="mx-auto rounded-circle"
              src="user.pokemon_1"
              alt=""
              onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
            />
            <h4 style="font-family: PKMN RBYGSC">{{ user.pokemon_4 }}</h4>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="team-member">
            <img
              class="mx-auto rounded-circle"
              v-bind:src="user.pokemon_1"
              alt=""
              onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
            />
            <h4 style="font-family: PKMN RBYGSC">{{ user.pokemon_5 }}</h4>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="team-member">
            <img
              class="mx-auto rounded-circle"
              src="user.pokemon_1"
              alt=""
              onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
            />
            <h4 style="font-family: PKMN RBYGSC">{{ user.pokemon_6 }}</h4>
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
    };
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
  },
};
</script>
