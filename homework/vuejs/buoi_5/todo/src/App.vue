<template>
  <div id="app">
    <div class="opacity"></div>
    <div class="wrapper">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/blogs">Blogs</router-link>
      </div>
      <b-container class="content">
        <router-view />
      </b-container>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-image: url(./assets/cover.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  z-index: 2;
}

.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: transparent;
}

.opacity {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.content {
  height: 70vh;
  overflow: auto;
}
</style>
