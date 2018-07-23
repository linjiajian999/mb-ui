<template>
  <div class="demo-page">
    <mdc-image-list>
      image-list
    </mdc-image-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ImageList from '@/packages/image-list'
Vue.use(ImageList)
export default Vue.extend({
  name: 'demo-image-list'
})
</script>

