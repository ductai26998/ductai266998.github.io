

<template>
  <div class="container">
    <div class="wrapper">
      <h4>Update Information!</h4>
      <div class="d-flex flex-column needs-validation">
        <input
          class="form-control"
          type="text"
          name="name"
          placeholder="Name"
          v-model="newInfo.name"
        />
        <input
          class="form-control"
          type="text"
          name="numberPhone"
          placeholder="Number Phone"
          v-model="newInfo.phoneNumber"
        />
        <div class="btn-container">
          <button class="btn btn-success" @click="update">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newInfo: {
        name: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    async update() {
      await axios.put(
        "https://606b20daf8678400172e5aff.mockapi.io/users/todos/" +
          this.$route.params.id,
        this.newInfo
      );
      this.$router.push('/');
    },
  },
};
</script>

<style scoped lang="scss">

.container {
  position: relative;
  height: 100%;
  width: 100%;
  .wrapper {
    width: 300px;
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, 50%);
    h4 {
      font-weight: 600;
    }
    input {
      margin: 5px 0;
    }

    button {
      background-color: transparent;
      padding: 5px 5px;
      border-radius: 5px;
      margin-top: 5px;
    }
    #remember {
      margin: 0px 5px;
    }
    button:hover {
      background-color: rgba(168, 167, 167, 0.568);
    }
  }
}
</style>