<template>
  <div class="demo-page">
    <mdc-__componentName__>
      __componentName__
    </mdc-__componentName__>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import __ComponentName__ from '@/packages/__componentName__'
Vue.use(__ComponentName__)
export default Vue.extend({
  name: 'demo-__componentName__'
})
</script>

