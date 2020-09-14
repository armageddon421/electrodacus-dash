<template>
  <Card title="WiFi" v-bind:unsaved="changed">
    <form class="flex">
      <h3>Wifi Client Mode <Tooltip text="Use this to connect to your existing router. If the connection is lost, it will automatically fall back to creating it's own Access Point as configured below." /></h3>
       <div class="formgrid">
        <input type="checkbox" id="sta_enable" name="sta_enable" v-model="conf.sta_enable">
        <label for="sta_enable">Enable WiFi Client <Tooltip text="Enables connecting to your existing router" /></label>

        <input type="text" id="hostname" name="hostname" v-model="conf.hostname" v-bind:disabled="!conf.sta_enable">
        <label for="hostname">Hostname <Tooltip text="The name under which the device will be found in your network" /></label>

        <input type="text" id="sta_ssid" name="sta_ssid" v-model="conf.sta_ssid" v-bind:disabled="!conf.sta_enable">
        <label for="sta_ssid">SSID</label>

        <input type="password" id="sta_pw" name="sta_pw" v-model="conf.sta_pw" v-bind:disabled="!conf.sta_enable">
        <label for="sta_pw">WiFi Password</label>
      </div>
      <h3>Wifi AP Mode <Tooltip text="Access Point Mode Configuration. This is the WiFi name and Password the device will use to create it's own access point. Please remember this very well as there is currently no way to reset it without reflashing the software via cable." /></h3>
      <div class="formgrid">
        <input type="text" id="ap_ssid" name="ap_ssid" v-model="conf.ap_ssid">
        <label for="ap_ssid">SSID <Tooltip text="If empty, default name will be used. Default is SBMS-[UUID]" /></label>

        <input type="password" id="ap_pw" name="ap_pw" v-model="conf.ap_pw">
        <label for="ap_pw">WiFi Password <Tooltip text="If empty, default password will be used. Default password is electrodacus" /></label>
      </div>
      <button class="foot" @click.prevent="save">Save</button>
    </form>
  </Card>
</template>

<script>
import Card from '@/components/Card.vue'
import Tooltip from '@/components/Tooltip.vue'

export default {
  name: 'WiFi',
  components: {
    Card,
    Tooltip
  },
  data () {
    return {
      loaded: false,
      changed: false,
      conf: {
        hostname: '',
        sta_ssid: '',
        sta_pw: '',
        sta_enable: false,
        ap_ssid: 'esp-12345678',
        ap_pw: 'electrodacus'
      }
    }
  },
  mounted () {
    this.$http.get('/cfg/wifi')
      .then(response => {
        this.conf = response.data
        this.loaded = true
        this.changed = false
      })
  },
  methods: {
    save: function (event) {
      this.$http.post('/cfg/wifi', this.conf)
        .then(response => {
          console.log(response)
          this.changed = false
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
