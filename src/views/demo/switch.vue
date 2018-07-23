<template>
  <div class="demo-page">
    <mdc-switch>
      switch
    </mdc-switch>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Switch from '@/packages/switch'
Vue.use(Switch)
export default Vue.extend({
  name: 'demo-switch'
})
</script>

