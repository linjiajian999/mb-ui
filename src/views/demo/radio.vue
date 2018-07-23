<template>
  <div class="demo-page">
    <mdc-radio>
      radio
    </mdc-radio>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Radio from '@/packages/radio'
Vue.use(Radio)
export default Vue.extend({
  name: 'demo-radio'
})
</script>

