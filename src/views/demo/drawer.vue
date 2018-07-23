<template>
  <div class="demo-page">
    <mdc-drawer>
      drawer
    </mdc-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Drawer from '@/packages/drawer'
Vue.use(Drawer)
export default Vue.extend({
  name: 'demo-drawer'
})
</script>

