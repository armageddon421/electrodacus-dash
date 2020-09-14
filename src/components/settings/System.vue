<template>
  <Card title="System" v-bind:unsaved="changed">
    <form class="flex">
      <h3>Development <Tooltip text="These are development settings and tools and you should normally not need to touch them." /></h3>
       <div class="formgrid">
        <input type="checkbox" id="ota_limit" name="ota_limit" v-model="conf.ota_limit">
        <label for="ota_limit">Limit OTA to the first 5 minutes after reboot <Tooltip text="Security feature, makes sure you had physical acces to reboot the device first." /></label>

        <a href="/debug" target="_blank">CPU stats</a>
      </div>
      <button class="foot" @click.prevent="save">Save</button>
    </form>
  </Card>
</template>

<script>
import Card from '@/components/Card.vue'
import Tooltip from '@/components/Tooltip.vue'

export default {
  name: 'System',
  components: {
    Card,
    Tooltip
  },
  data () {
    return {
      loaded: false,
      conf: {
        ota_limit: true
      }
    }
  },
  mounted () {
    this.$http.get('/cfg/sys')
      .then(response => {
        this.conf = response.data
        this.loaded = true
      })
  },
  methods: {
    save: function (event) {
      this.$http.post('/cfg/sys', this.conf)
        .then(response => {
          console.log(response)
        })
    }
  },
  watch: {
    conf: {
      handler (val) {
        this.changed = true
        console.log('changed')
      },
      deep: true
    }
  }
}
</script>

<style scoped src="@/components/Card.css">
</style>
