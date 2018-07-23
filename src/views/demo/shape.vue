<template>
  <div class="demo-page">
    <mdc-shape>
      shape
    </mdc-shape>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Shape from '@/packages/shape'
Vue.use(Shape)
export default Vue.extend({
  name: 'demo-shape'
})
</script>

