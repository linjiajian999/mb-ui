<template>
  <div class="demo-page">
    <mdc-fab>
      fab
    </mdc-fab>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Fab from '@/packages/fab'
Vue.use(Fab)
export default Vue.extend({
  name: 'demo-fab'
})
</script>

