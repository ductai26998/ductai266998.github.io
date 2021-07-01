<template>
  <div class="home container">
    <b-list-group class="users">
      <b-list-group-item class="user-item" v-for="user in users" :key="user.id">
        <div class="d-flex"> 
          <img
            :src="user.avatar"
            alt=""
            @click="$router.push(/user/ + user.id)"
          />
          <div class="user-info">
            <h4 @click="$router.push(/user/ + user.id)">{{ user.name }}</h4>
            <p>Phone: {{ user.phoneNumber }}</p>
          </div>
        </div>
        <div class="active">
          <div class="btn-container">
            <button
              class="btn btn-success"
              @click="$router.push('/user/update/' + user.id)"
            >
              <i class="far fa-edit"></i>
            </button>
            <button class="btn btn-danger mx-1" @click="deleteItem(user)">
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      users: [],
      newInfo: {
        name: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    async deleteItem(user) {
      await axios.delete(
        "https://606b20daf8678400172e5aff.mockapi.io/users/todos/" + user.id
      );
      this.$router.go("/");
    },
  },
  async created() {
    const response = await axios.get(
      "https://606b20daf8678400172e5aff.mockapi.io/users/todos"
    );
    this.users = response.data;
  },
  components: {},
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 470px) {
  .user-item {
    flex-direction: column !important;
    align-items: center;
    img {
      margin: 0px !important;
    }

    .user-info {
      text-align: left;
      padding: 10px;
      font-family: serif;
      h4 {
        font-weight: 550;
        font-size: 20px;
      }
    }
  }
}
.container {
  .users {
    margin: 40px;
    .user-item {
      background-color: transparent;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      cursor: pointer;
      border: 0;
      border-bottom: 1px #fff solid;
      img {
        height: 15vw;
        width: 15vw;
        min-width: 100px;
        min-height: 100px;
        margin: 0px 20px 10px 0px;
      }

      .user-info {
        text-align: left;
        padding: 10px;
        font-family: serif;
        h4 {
          font-weight: 550;
          font-size: 20px;
        }
      }

      .active {
        position: relative;
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }
}
</style>
