<template>
  <div class="home">
    <div style="display: none">{{ saveData }}</div>
    <CreateItem v-model="newItem" v-on:submit="submit" />
    <TodoList :items="items" v-model="items" />
    <h4 v-if="items.length < 1">The work list is empty !!!</h4>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateItem from "@/components/CreateItem.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Home",
  components: {
    CreateItem,
    TodoList,
  },
  computed: {
    saveData() {
      return localStorage.setItem("items", JSON.stringify(this.items));
    },
  },
  methods: {
    submit: function () {
      let error = "";
      let existedItem = this.items.find((item) => item.name == this.newItem);

      if (this.newItem == "") {
        error += "Work is invalid !!!";
      }

      if (existedItem) {
        error += "Work existed!!!";
      }

      if (error != "") {
        alert(error);
      } else {
        this.items.push({ name: this.newItem, done: false, editing: false });
      }
    },
  },
  data() {
    return {
      newItem: "",
      items: localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [],
    };
  },
};
</script>
