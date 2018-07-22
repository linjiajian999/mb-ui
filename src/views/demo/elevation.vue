<template>
  <div class="demo-page">
    <h3>组件形式</h3>
    <mdc-elevation
      tag="span"
      class="demo-elevation"
      :index="8"
      v-ripple
      @click="click">
      8 dp
    </mdc-elevation>
    <h3>指令形式</h3>
    <div
      class="demo-elevation"
      v-for="z in 24"
      :key="z"
      v-elevation="z"
      v-ripple>
      {{ z }} dp
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Ripple from '@/packages/ripple'
import Elevation from '@/packages/elevation'

Vue.use(Ripple)
Vue.use(Elevation)

export default Vue.extend({
  name: 'demo-elevation',
  methods: {
    click() {
      console.log('on elevation click')
    }
  }
})
</script>

<style lang="scss">
@import '@material/elevation/mdc-elevation';
.demo-elevation {
  display: inline-flex;
  min-width: 128px;
  min-height: 128px;
  margin: 24px;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  user-select: none;
  border-radius: 8px;
}
</style>

