<template>
  <div class="profile">
    <!-- <section class="party-icons" id="team"> -->
    <div class="container">
      <button type="button" class="btn btn-outline-primary">
        <router-link v-bind:to="`users/${user.id}/edit`">Edit Profile</router-link>
      </button>
      <div class="text-center">
        <h1 class="section-heading text-uppercase">{{ user.username }}'s Party</h1>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="team-member">
            <img
              class="mx-auto rounded-circle"
              src="user.pokemon_1"
              alt=""
              onerror="this.src
              ='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'"
            />
            <h4>{{ user.pokemon_1 }}</h4>
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
            <h4>{{ user.pokemon_2 }}</h4>
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
            <h4>{{ user.pokemon_3 }}</h4>
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
            <h4>{{ user.pokemon_4 }}</h4>
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
            <h4>{{ user.pokemon_5 }}</h4>
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
            <h4>{{ user.pokemon_6 }}</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- </section> -->
  </div>
</template>

<style>
.profile {
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: 1000px;
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
