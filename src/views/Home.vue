<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
body {
  background-color: aqua;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
