<template>
  <div class="demo-page">
    <mdc-button>
      button
    </mdc-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Button from '@/packages/button'
Vue.use(Button)
export default Vue.extend({
  name: 'demo-button'
})
</script>

