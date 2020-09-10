<template>
  <Card title="WiFi">
    <form action="/sWifi" method="post" class="flex">
      <h3>Wifi Client Mode</h3>
       <div class="formgrid">
        <input type="checkbox" id="sta_enable" name="sta_enable" v-model="conf.sta_enable">
        <label for="sta_enable">Enable WiFi Client</label>

        <input type="text" id="hostname" name="hostname" v-model="conf.hostname">
        <label for="hostname">Hostname</label>

        <input type="text" id="sta_ssid" name="sta_ssid" v-model="conf.sta_ssid">
        <label for="sta_ssid">SSID</label>

        <input type="password" id="sta_pw" name="sta_pw" v-model="conf.sta_pw">
        <label for="sta_pw">WiFi Password</label>
      </div>
      <h3>Wifi AP Mode</h3>
      <div class="formgrid">
        <input type="text" id="ap_ssid" name="ap_ssid" v-model="conf.ap_ssid">
        <label for="ap_ssid">SSID</label>

        <input type="password" id="ap_pw" name="ap_pw" v-model="conf.ap_pw">
        <label for="ap_pw">WiFi Password</label>
      </div>
      <input type="submit" value="Save" name="submit" class="foot">
    </form>
  </Card>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'WiFi',
  components: {
    Card
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
