<template>
    <div class="card">
      <h3 class="title">{{title}} <font-awesome-icon v-if="unsaved" icon="save" style="color: red" /></h3>
      <div class="content">
        <slot />
      </div>
    </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    title: String,
    unsaved: Boolean
  }
}
</script>

<style scoped>
.card {
  background-color: white;
  width: 420px;
}

.title {
  padding: 0.4em;
  margin: 0;
  background-color: lightseagreen;
}

.content {
  margin: 0.4em;
}

</style>
