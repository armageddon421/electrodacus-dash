<template>
  <Grid>
      <WiFi />
      <WiFi />
      <WiFi />
      <WiFi />
  </Grid>
</template>

<script>
// @ is an alias to /src
import WiFi from '@/components/settings/WiFi.vue'
import Grid from '@/components/Grid.vue'

export default {
  name: 'Settings',
  components: {
    WiFi,
    Grid
  }
}
</script>

<style scoped>

</style>
