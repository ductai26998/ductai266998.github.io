<template>
  <b-container class="create">
    <input
      class="add-work"
      type="text"
      placeholder="Add new work"
      :value="newItem"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="$emit('submit')"
    />
  </b-container>
</template>

<script>
export default {
  name: "CreateItem",
  props: {
    newItem: {
      type: String
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-work {
  border: 0;
  outline: none;
  margin-bottom: 20px;
  width: 60vw;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.74);
}
</style>
