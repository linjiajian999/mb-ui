<template>
  <div class="demo-page">
    <mdc-card>
      card
    </mdc-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Card from '@/packages/card'
Vue.use(Card)
export default Vue.extend({
  name: 'demo-card'
})
</script>

