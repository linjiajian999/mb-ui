<template>
  <div class="demo-page">
    <mdc-textfield>
      textfield
    </mdc-textfield>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Textfield from '@/packages/textfield'
Vue.use(Textfield)
export default Vue.extend({
  name: 'demo-textfield'
})
</script>

