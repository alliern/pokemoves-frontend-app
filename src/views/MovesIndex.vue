<template>
  <div class="moves-index">
    <img
      class="index-img"
      src="https://fontmeme.com/permalink/210429/f93e07aaf4a8a5a82e9dccae99a84f58.png"
      alt="pokemon-font"
      border="0"
    />
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Type
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Learn Style
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <h1></h1>

    <div class="show-card" style="center">
      <div class="card-body" v-for="move in moves" v-bind:key="move.id">
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
export default {
  data: function () {
    return {
      moves: [],
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
