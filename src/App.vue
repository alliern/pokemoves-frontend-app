<template>
  <div id="app">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark static-top" id="mainNav">
      <div class="container">
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars ml-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <a style="font-family: PKMN RBYGSC" class="nav-link js-scroll-trigger" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a style="font-family: PKMN RBYGSC" class="nav-link js-scroll-trigger" href="/pokemon">All Pokemon</a>
            </li>
            <li class="nav-item">
              <a style="font-family: PKMN RBYGSC" class="nav-link js-scroll-trigger" href="/moves">All Moves</a>
            </li>
            <li v-if="!isLoggedIn()" class="nav-item">
              <a style="font-family: PKMN RBYGSC" class="nav-link js-scroll-trigger" href="/login">Log In</a>
            </li>

            <li class="nav-item" v-if="isLoggedIn()">
              <a style="font-family: PKMN RBYGSC" class="nav-link js-scroll-trigger" href="/profile">User Profile</a>
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <a style="font-family: PKMN RBYGSC" class="nav-link js-scroll-trigger" href="/users">Browse Users</a>
            </li>

            <li v-if="isLoggedIn()" class="nav-item">
              <a style="font-family: PKMN RBYGSC" class="nav-link js-scroll-trigger" href="/logout">Log Out</a>
            </li>
            <li v-if="!isLoggedIn()" class="nav-item">
              <a style="font-family: PKMN RBYGSC" class="nav-link js-scroll-trigger" href="/signup">Create Account</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <!-- Footer-->
    <footer class="footer py-4">
      <div class="row align-items-center">
        <div class="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: "PKMN RBYGSC";
  font-size: 25px;
  text-align: center;
  color: #2c3e50;
}
body {
  background-image: url("https://i.pinimg.com/originals/1c/a6/e1/1ca6e1c35e2d884230242cc0326dbf28.jpg");
  background-size: 1550px;
  background-attachment: fixed;
}
/* footer {
  background-color: rgb(129, 172, 119);
} */
@font-face {
  font-family: "PKMN RBYGSC";
  src: local("PKMN RBYGSC"), url("./fonts/PKMN RBYGSC.ttf") format("truetype");
}
</style>
<script>
export default {
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
  },
};
</script>
