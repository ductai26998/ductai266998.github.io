<template>
  <b-container class="todo-list">
    <b-list-group class="list">
      <b-list-group-item
        class="item d-flex"
        v-for="item in items"
        :key="item.name"
      >
        <b-col class="info">
          <input
            type="checkbox"
            v-show="!item.editing"
            v-model="item.done"
            name=""
            class="mx-2"
          />
          <label
            class=""
            v-show="!item.editing"
            :style="item.done ? doneStyle : ''"
          >
            {{ item.name }}
          </label>
          <input
            type="text"
            v-model="editItem"
            @keyup.enter="update(item)"
            v-show="item.editing"
          />
        </b-col>
        <b-col class="button-container" v-show="item.editing">
          <button
            class="btn btn-success"
            @click="update(item)"
          >
            <i class="fas fa-check"></i>
          </button>
          <button class="btn btn-danger" @click="cancel(item)">
            <i class="fas fa-times"></i>
          </button>
        </b-col>
        <b-col class="button-container" v-show="!item.editing">
          <button
            class="btn btn-success"
            @click="edit(item)"
          >
            <i class="far fa-edit"></i>
          </button>
          <button class="btn btn-danger" @click="deleteItem(item)">
            <i class="fas fa-minus"></i>
          </button>
        </b-col>
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    deleteItem: function (item) {
      let index = this.items.findIndex((element) => element.name == item.name);
      this.items.splice(index, 1);
    },
    edit: function (item) {
      item.editing = true;
    },
    update: function (item) {
      let error = "";
      let existedItem = this.items.find((item) => item.name == this.editItem);

      if (this.editItem == "") {
        error += "Work is invalid !!!";
      }

      if (existedItem) {
        error += "Work existed!!!";
      }

      if (error != "") {
        alert(error);
      } else {
        item.name = this.editItem;
        this.editItem = "";
        item.editing = false;
      }
    },
    cancel: function (item) {
      item.editing = false;
    },
  },
  data() {
    return {
      doneStyle: {
        textDecoration: "line-through",
        color: "grey",
      },
      editItem: "",
    };
  },
};
</script>

<style scoped lang="scss">
.todo-list {
  .list {
    .item {
      .info {
        text-align: left;
        display: flex;
        align-items: center;
      }
      .button-container {
        text-align: right;
        button {
          margin-right: 5px;
          width: 45px;
        }
      }
    }
  }
}
</style>
