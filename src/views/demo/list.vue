<template>
  <div class="demo-page">
    <mdc-list>
      list
    </mdc-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import List from '@/packages/list'
Vue.use(List)
export default Vue.extend({
  name: 'demo-list'
})
</script>

