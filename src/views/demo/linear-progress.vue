<template>
  <div class="demo-page">
    <mdc-linear-progress>
      linear-progress
    </mdc-linear-progress>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import LinearProgress from '@/packages/linear-progress'
Vue.use(LinearProgress)
export default Vue.extend({
  name: 'demo-linear-progress'
})
</script>

