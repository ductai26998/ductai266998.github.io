<template>
  <div id="app">
    <div class="cover"></div>
    <div class="content">
      <Navbar class="navbar"></Navbar>
      <router-view class="view" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
* {
  font-family: serif;
  letter-spacing: 0.5px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .cover {
    background-image: url(./assets/cover.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: fixed;
  }
  .cover::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #333;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
  }
  .content {
    background-color: transparent;
    .navbar {
      position: fixed;
      top: 0;
      z-index: 99;
      background-color: #fff;
      height: 70px;
      width: 100%;
    }

    .view {
      margin-top: 70px;
      padding-top: 5px;
      position: relative;
      color: #fff;
      background-color: transparent;
    }
  }
}
</style>
