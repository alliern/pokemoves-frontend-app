<template>
  <div class="pokemon-show">
    <div class="show-card" style="center">
      <div class="card-body">
        <img class="pokemon-image" v-bind:src="pokemon.image" v-bind:alt="pokemon.title" />
        <h3 class="card-title" style="font-family: PKMN RBYGSC">{{ pokemon.name }}</h3>
      </div>
      <div class="card-body">
        <li class="list-group-item">
          <p>
            <strong>Region:</strong>
            {{ pokemon.region }}
          </p>
          <p>
            <strong>Type 1:</strong>
            {{ pokemon.type_1 }}
          </p>
          <p>
            <strong>Type 2:</strong>
            {{ pokemon.type_2 }}
          </p>
        </li>
      </div>
    </div>
    <div class="show-card">
      <div class="card-body">
        <h1 class="card-title" style="font-family: PKMN RBYGSC">Moves</h1>
      </div>
      <div class="card-body">
        <!-- <ul class="list-group list-group-flush"> -->
        <li class="list-group-item" v-for="poke_move in showMoves" v-bind:key="poke_move.id">
          {{ poke_move.move_name }}
          <h3></h3>
          <br />
          <strong>Learned By:</strong>
          <br />
          HM / TM? {{ poke_move.hm_tm }};

          <strong>Leveling up?</strong>
          {{ poke_move.leveling }}
        </li>
        <!-- </ul> -->
      </div>
    </div>
  </div>
</template>
<style>
.pokemon-show {
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}
.show-card {
  opacity: 0.8;
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 30px;
  /* margin-bottom: 30px; */
}

.pokemon-image {
  /* border-radius: 8px; */
  width: 280px;
  height: 195px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      pokemon: {},
    };
  },
  computed: {
    showMoves: function () {
      return this.pokemon.poke_moves;
    },
  },
  created: function () {
    this.showPokemon();
  },
  methods: {
    showPokemon: function () {
      axios.get("/api/pokemon/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.pokemon = response.data;
      });
    },
  },
};
</script>
