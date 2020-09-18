<template>
  <Card title="Status" v-bind:unsaved="false" v-bind:loading="false">
    <div v-if="sbms.time !== undefined">
      {{("00"+sbms.time.hour).substr(-2)}}:{{("00"+sbms.time.minute).substr(-2)}}:{{("00"+sbms.time.second).substr(-2)}}
    </div>
    <div v-if="sbms.soc !== undefined">
      {{sbms.soc}}%
    </div>
    <div v-if="sbms.tempInt !== undefined && sbms.tempExt !== undefined">
      Int: {{sbms.tempInt}}°C
      Ext: {{sbms.tempExt}}°C
    </div>
    <div v-if="sbms.cellsMV !== undefined">
      {{sbms.cellsMV.reduce((a,c) => {return a + c})/1000.0}}V
    </div>
    <div v-if="sbms.currentMA !== undefined">
      battery: {{sbms.currentMA.battery/1000.0}}A <br />
      pv1: {{sbms.currentMA.pv1/1000.0}}A <br />
      extLoad: {{sbms.currentMA.extLoad/1000.0}}A <br />
    </div>
    <div v-for="(value, name) in sbms.flags" v-bind:key="name">
      <div v-if="value">
        {{name}}
      </div>
    </div>
  </Card>
</template>

<script>
import Card from '@/components/Card.vue'
// import Tooltip from '@/components/Tooltip.vue'

export default {
  name: 'Status',
  components: {
    Card
  },
  data () {
    return {
    }
  },
  props: {
    sbms: Object
  }
}
</script>

<style scoped src="@/components/Card.css">
</style>
