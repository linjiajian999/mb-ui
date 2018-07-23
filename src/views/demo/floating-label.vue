<template>
  <div class="demo-page">
    <mdc-floating-label>
      floating-label
    </mdc-floating-label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import FloatingLabel from '@/packages/floating-label'
Vue.use(FloatingLabel)
export default Vue.extend({
  name: 'demo-floating-label'
})
</script>

