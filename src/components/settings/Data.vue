<template>
  <Card title="Data" v-bind:unsaved="changed">
    <form class="flex">
      <h3>SBMS <Tooltip text="This data package contains most of the relevant live-information about the SBMS." /></h3>
       <div class="formgrid">
        <input type="checkbox" id="sbms_enabled" name="sbms_enabled" v-model="conf.sbms_enabled">
        <label for="sbms_enabled">Enable</label>

        <input type="checkbox" id="sbms_diff" name="sbms_diff" v-model="conf.sbms_diff" v-bind:disabled="!conf.sbms_enabled">
        <label for="sbms_diff">Include max cell delta <Tooltip text="This will include the field 'delta' that shows the maximum cell delta." /></label>
      </div>
      <h3>S2 <Tooltip text="This contains information about what cells are currently being balanced." /></h3>
      <div class="formgrid">
        <input type="checkbox" id="s2_enbaled" name="s2_enbaled" v-model="conf.s2_enbaled">
        <label for="s2_enbaled">Enable</label>
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
      conf: {
        sbms_enabled: true,
        sbms_diff: false,
        s2_enabled: false
      }
    }
  },
  mounted () {
    this.$http.get('/cfg/data')
      .then(response => {
        this.conf = response.data
        this.loaded = true
      })
  },
  methods: {
    save: function (event) {
      this.$http.post('/cfg/data', this.conf)
        .then(response => {
          console.log(response)
        })
    }
  },
  watch: {
    conf: {
      handler (val) {
        if (this.loaded) this.changed = true
      },
      deep: true
    }
  }
}
</script>

<style scoped src="@/components/Card.css">
</style>
