<template>
    <div class="card">
      <h3 class="title">{{title}} <font-awesome-icon v-if="unsaved" icon="save" style="color: red" /></h3>
      <pulse-loader class="loader" :size="'20px'" :loading="loading"></pulse-loader>
      <div class="content" v-bind:style="{visibility: loading?'hidden':'visible'}">
        <slot />
      </div>
    </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: 'Card',
  components: {
    PulseLoader
  },
  props: {
    title: String,
    unsaved: Boolean,
    loading: Boolean
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

.loader {
  width: 100%;
  position: absolute;
  top: 5em;
  margin-top: -20px;
}

</style>
