<template>
  <div class="demo-page">
    <mdc-ripple
      tag="span"
      class="demo-ripple"
      v-elevation="12"
      @click="click">
      this is a Ripple component
    </mdc-ripple>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Ripple from '@/packages/ripple'
import Elevation from '@/packages/elevation'

Vue.use(Ripple)
Vue.use(Elevation)
export default Vue.extend({
  name: 'demo-ripple',
  methods: {
    click() {
      console.log('on ripple click')
    }
  }
})
</script>

<style lang="scss">
.demo-ripple {
  display: inline-block;
  width: 200px;
  height: 200px;
  padding: 12px;
  border-radius: 12px;
  overflow: hidden;
  user-select: none;
}
</style>

