<template>
  <Card title="MQTT" v-bind:unsaved="changed">
    <form class="flex">
      <h3>Connection <Tooltip text="MQTT is an IoT message passing protocol. Use this to publish your SBMS status to an MQTT broker every second. The data will be in JSON format." /></h3>
       <div class="formgrid">
        <input type="checkbox" id="mq_enabled" name="mq_enabled" v-model="conf.mq_enabled">
        <label for="mq_enabled">Enable MQTT client <Tooltip text="Enables the connection to an MQTT broker" /></label>

        <input type="text" id="mq_host" name="mq_host" v-model="conf.mq_host" v-bind:disabled="!conf.mq_enabled">
        <label for="mq_host">Server IP/Hostname</label>

        <input type="number" id="mq_port" name="mq_port" v-model.number="conf.mq_port" v-bind:disabled="!conf.mq_enabled">
        <label for="mq_port">Server Port <Tooltip text="Default is 1883" /></label>

        <input type="text" id="mq_prefix" name="mq_prefix" v-model="conf.mq_prefix" v-bind:disabled="!conf.mq_enabled">
        <label for="mq_prefix">MQTT prefix <Tooltip text="Different topics will be published as configured in the Data section. The prefix will be prepended to the topics: [prefix]sbms. A prefix of '/' will become '/[topic]'. You could do '/solar/battery/' to get '/solar/battery/[topic]'." /></label>
      </div>
      <h3>Security <Tooltip text="For now only unencrypted username/password connections or anonymous connections are supported." /></h3>
      <div class="formgrid">
        <input type="text" id="mq_user" name="mq_user" v-model="conf.mq_user" v-bind:disabled="!conf.mq_enabled">
        <label for="mq_user">MQTT username <Tooltip text="If empty no authentication will be used (anonymous)" /></label>

        <input type="password" id="mq_password" name="mq_password" v-model="conf.mq_password" v-bind:disabled="!conf.mq_enabled">
        <label for="mq_password">MQTT Password</label>
      </div>
      <button class="foot" @click.prevent="save">Save</button>
    </form>
  </Card>
</template>

<script>
import Card from '@/components/Card.vue'
import Tooltip from '@/components/Tooltip.vue'

export default {
  name: 'Data',
  components: {
    Card,
    Tooltip
  },
  data () {
    return {
      loaded: false,
      justLoaded: false,
      changed: false,
      conf: {
        mq_enabled: false,
        mq_hostname: '',
        mq_port: 1883,
        mq_prefix: '/',
        mq_user: '',
        mq_password: ''
      }
    }
  },
  mounted () {
    this.$http.get('/cfg/mqtt')
      .then(response => {
        this.conf = response.data
        this.loaded = true
        this.justLoaded = true
      })
  },
  methods: {
    save: function (event) {
      this.$http.post('/cfg/mqtt', this.conf)
        .then(response => {
          console.log(response)
          this.changed = false
        })
    }
  },
  watch: {
    conf: {
      handler (val) {
        if (this.justLoaded) {
          this.justLoaded = false
        } else {
          this.changed = true
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped src="@/components/Card.css">
</style>
