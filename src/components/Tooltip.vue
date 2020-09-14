<template>
  <span class="tooltip">
    <div v-if="visible" class="popper">
        {{text}}
    </div>

    <a class="icon" @mouseover="show" @mouseleave="hide">
        <font-awesome-icon icon="info-circle" />
    </a>
  </span>
</template>

<script>

export default {
  name: 'Tooltip',
  components: {
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show: function (event) {
      this.visible = true
    },
    hide: function (event) {
      this.visible = false
    }
  },
  props: {
    text: String
  }
}
</script>

<style scoped>
.tooltip {
  position: relative;
}

.popper {
    background-color: white;
    padding: 0.4em;
    position: absolute;
    z-index: 2;
    top: 2em;
    left: 2em;
    font-size: 12pt;
    font-weight: normal;
    text-align: center;
    width: 20em;
    border: 2px solid black;
}

.icon {
  color: skyblue;
  font-weight: bold;
}
</style>
