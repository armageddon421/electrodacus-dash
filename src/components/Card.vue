<template>
    <div class="card">
      <h3 class="title">{{title}}</h3>
      <div class="content">
        <slot />
      </div>
    </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    title: String
  }
}
</script>

<style scoped>
.card {
  background-color: white;
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
