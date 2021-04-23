<template>
  <div class="move-show">
    <div class="container">
      <h2>{{ move.name }}</h2>
      <p>
        <b>Type:</b>
        {{ move.type_0 }}
      </p>
      <p>
        <b>HM or TM:</b>
        {{ move.hm_tm }}
      </p>
      <p>
        <b><strong>Category:</strong></b>
        {{ move.category }}
      </p>
    </div>
    <button type="button" class="btn btn-outline-primary"></button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      move: {},
    };
  },
  created: function () {
    this.showmove();
  },
  methods: {
    showmove: function () {
      axios.get("/api/moves/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.move = response.data;
      });
    },
  },
};
</script>
