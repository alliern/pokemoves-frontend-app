<template>
  <div class="moves-index">
    <h1>All moves:</h1>
    <div v-for="move in moves" v-bind:key="move.id">
      <router-link v-bind:to="`moves/${move.id}`">
        <h2>{{ move.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<style></style>

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
