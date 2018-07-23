<template>
  <div class="demo-page">
    <mdc-line-ripple>
      line-ripple
    </mdc-line-ripple>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import LineRipple from '@/packages/line-ripple'
Vue.use(LineRipple)
export default Vue.extend({
  name: 'demo-line-ripple'
})
</script>

