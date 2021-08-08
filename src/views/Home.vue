<template>
  <Grid>
    <Status v-bind:sbms="data.sbms"/>
  </Grid>
</template>

<script>
// @ is an alias to /src
import Status from '@/components/dashboard/Status.vue'
import Grid from '@/components/Grid.vue'

// We store the reference to the SSE object out here
// so we can access it from other methods
let msgServer

export default {
  name: 'Settings',
  components: {
    Status,
    Grid
  },
  data () {
    return {
      data: {
        sbms: {}
      }
    }
  },
  mounted: function () {
    this.$sse('/eData', { format: 'json' })
      .then(sse => {
        // Store SSE object at a higher scope
        msgServer = sse

        // Listen for messages based on their event (in this case, "chat")
        msgServer.subscribe('sbms', (message, rawEvent) => {
          this.data.sbms = message
        })
      })
      .catch(err => {
        // When this error is caught, it means the initial connection to the
        // events server failed.  No automatic attempts to reconnect will be made.
        console.error('Failed to connect to server', err)
      })
  },
  beforeDestroy: function () {
    msgServer.close()
  }
}
</script>

<style scoped>

</style>
