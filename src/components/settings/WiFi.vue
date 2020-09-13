<template>
  <Card title="WiFi">
    <form class="flex">
      <h3>Wifi Client Mode <Tooltip text="Use this to connect to your existing router. If the connection is lost, it will automatically fall back to creating it's own Access Point as configured below." /></h3>
       <div class="formgrid">
        <input type="checkbox" id="sta_enable" name="sta_enable" v-model="conf.sta_enable">
        <label for="sta_enable">Enable WiFi Client <Tooltip text="Enables connecting to your existing router" /></label>

        <input type="text" id="hostname" name="hostname" v-model="conf.hostname">
        <label for="hostname">Hostname <Tooltip text="The name under which the device will be found in your network" /></label>

        <input type="text" id="sta_ssid" name="sta_ssid" v-model="conf.sta_ssid">
        <label for="sta_ssid">SSID</label>

        <input type="password" id="sta_pw" name="sta_pw" v-model="conf.sta_pw">
        <label for="sta_pw">WiFi Password</label>
      </div>
      <h3>Wifi AP Mode <Tooltip text="Access Point Mode Configuration. This is the WiFi name and Password the device will use to create it's own access point." /></h3>
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
      })
  },
  methods: {
    save: function (event) {
      this.$http.post('/cfg/wifi', this.conf)
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.formgrid {
  display: grid;
  grid-template-columns: 1fr 1em 2fr;
  grid-gap: 0.4em 0.6em;
  grid-auto-flow: dense;
  align-items: center;
}

label {
  float: left;
  width: 30%;
  text-align: right;
  padding: 0.25em 1em 0 0;
}

input[type="checkbox"] + label, input[type="radio"] + label {
  width: auto;
  text-align: left;
}

label, input[type="checkbox"] + label, input[type="radio"] + label {
  width: auto;
  padding: 0;
  margin: 0;
}

input, output, textarea, select, button {
  grid-column: 2 / 4;
  width: auto;
  margin: 0;
}

input[type="checkbox"], input[type="radio"] {
  grid-column: 1 / 3;
  justify-self: end;
  margin: 0;
}

textarea + label {
  align-self: start;
}

.foot {
  width: 100%;
  margin-top: 0.6em;
}

h3 {
  padding: 0.2em;
  margin: 0.4em 0;
  background-color: rgb(199, 209, 223);
}

a {
  color: #42b983;
}

</style>
