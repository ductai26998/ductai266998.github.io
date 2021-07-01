<template>
  <div>
    <b-nav class="d-flex justify-content-between w-100">
      <div class="d-flex">
        <b-nav-item>
          <router-link to="/">
            <img src="@/assets/todo.svg" alt="" />
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/">Home</router-link>
        </b-nav-item>
      </div>
      <b-nav-item>
        <router-link to="/register">
          <button class="register-btn">
            Register
          </button>
        </router-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$text-color: #222;

* {
  color: $text-color;
  font-family: "FontAwesome";
}

a {
  text-decoration: none !important;
}

.navbar {
  .nav-item {
    align-items: center;
    display: flex;
    img {
      height: 40px;
    }
    .register-btn {
      border-radius: 5px;
      border: 1px solid #111;
      background-color: transparent;
      padding: 0 10px;
    }
    .register-btn:hover {
      background-color: rgba(168, 167, 167, 0.568);
    }
  }
}

@media screen and (max-width: 300px) {
  .navbar {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>