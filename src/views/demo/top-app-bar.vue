<template>
  <div class="demo-page">
    <mdc-top-app-bar>
      top-app-bar
    </mdc-top-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TopAppBar from '@/packages/top-app-bar'
Vue.use(TopAppBar)
export default Vue.extend({
  name: 'demo-top-app-bar'
})
</script>

