<template>
  <div class="demo-page">
    <mdc-select>
      select
    </mdc-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Select from '@/packages/select'
Vue.use(Select)
export default Vue.extend({
  name: 'demo-select'
})
</script>

