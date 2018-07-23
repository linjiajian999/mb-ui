<template>
  <div class="demo-page">
    <mdc-selection-control>
      selection-control
    </mdc-selection-control>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import SelectionControl from '@/packages/selection-control'
Vue.use(SelectionControl)
export default Vue.extend({
  name: 'demo-selection-control'
})
</script>

