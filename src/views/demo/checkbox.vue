<template>
  <div class="demo-page">
    <mdc-checkbox>
      checkbox
    </mdc-checkbox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Checkbox from '@/packages/checkbox'
Vue.use(Checkbox)
export default Vue.extend({
  name: 'demo-checkbox'
})
</script>

