<template>
  <div class="moves-index">
    <br />
    <img
      class="index-img"
      src="https://fontmeme.com/permalink/210429/f93e07aaf4a8a5a82e9dccae99a84f58.png"
      alt="pokemon-font"
      border="0"
    />

    <h1></h1>
    <input type="search" style="center; font-size: 20px;" placeholder="search..." v-model="filterInput" />
    <h6 style="font-family: PKMN RBYGSC">Search by name, type, or category</h6>

    <div class="show-card" style="center">
      <!-- <div class="card-body" v-for="move in moves" v-bind:key="move.id"> -->
      <div class="card-body" v-for="move in filterBy(moves, filterInput)" v-bind:key="move.id">
        <router-link v-bind:to="`moves/${move.id}`">
          <h2 style="font-family: PKMN RBYGSC">{{ move.name }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.moves-index {
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
.show-card {
  opacity: 0.8;
  background-color: rgb(253, 255, 255);
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 30px;
  /* margin-bottom: 30px; */
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      moves: [],
      filterInput: "",
    };
  },
  created: function () {
    this.indexmoves();
  },
  methods: {
    indexmoves: function () {
      axios.get("/api/moves").then((response) => {
        console.log(response.data);
        this.moves = response.data;
      });
    },
  },
};
</script>
