<template>
  <div class="user">
    <div
      class="avatar"
      :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
    ></div>
    <div class="container">
      <h3 class="title">{{ user.name }}</h3>
      <p class="content">Phone: {{ user.phoneNumber }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserDetail",
  data() {
    return {
      user: {},
    };
  },
  async created() {
    const response = await axios.get(
      "https://606b20daf8678400172e5aff.mockapi.io/users/todos/" +
        this.$route.params.id
    );
    this.user = response.data;
    console.log(this.user);
  },
};
</script>

<style lang="scss" scoped>
.user {
    display: flex;
    flex-direction: column;
    align-items: center;
  .avatar {
    width: 250px;
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .container {
    h3 {
      font-weight: 600;
      margin: 20px;
    }
    p {
      text-align: center;
      font-weight: 600;
      font-family: sans-serif;
      letter-spacing: 1px;
    }
  }
}
</style>>
