<template>
  <div class="about">
    <h1><a href="https://github.com/armageddon421/electrodacus-esp32" target="_blank">GitHub</a></h1>
    <h1><a href="https://electrodacus.com" target="_blank">ElectroDacus</a></h1>
    <div>Version: {{version}}</div>
  </div>
</template>

<script>

export default {
  name: 'About',
  data () {
    return {
      loaded: false,
      version: 'loading...'
    }
  },
  mounted () {
    this.$http.get('/version')
      .then(response => {
        this.version = response.data
        if (this.version.startsWith('b\'')) {
          this.version = this.version.substring(2, this.version.length - 1)
        }
        this.loaded = true
        this.justLoaded = true
      })
  }
}
</script>
