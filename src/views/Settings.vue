<template>
  <Grid>
      <WiFi />
      <Mqtt />
      <Data />
      <System />
  </Grid>
</template>

<script>
// @ is an alias to /src
import WiFi from '@/components/settings/WiFi.vue'
import Mqtt from '@/components/settings/Mqtt.vue'
import Data from '@/components/settings/Data.vue'
import System from '@/components/settings/System.vue'
import Grid from '@/components/Grid.vue'

export default {
  name: 'Settings',
  components: {
    WiFi,
    Mqtt,
    Data,
    System,
    Grid
  }
}
</script>

<style scoped>

</style>
