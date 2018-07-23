<template>
  <div class="demo-page">
    <mdc-dialog>
      dialog
    </mdc-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Dialog from '@/packages/dialog'
Vue.use(Dialog)
export default Vue.extend({
  name: 'demo-dialog'
})
</script>

