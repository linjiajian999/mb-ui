<template>
  <div class="demo-page">
    <mdc-chips>
      chips
    </mdc-chips>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Chips from '@/packages/chips'
Vue.use(Chips)
export default Vue.extend({
  name: 'demo-chips'
})
</script>

