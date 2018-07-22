<template>
  <div
    :class="`mdc-elevation--z${index}`"
    :is="tag"
    v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'mdc-elevation',
  props: {
    index: {
      type: [String, Number],
      default: 8
    },
    tag: {
      type: String,
      default: 'div'
    }
  }
})
</script>

<style lang="scss">
@import '@material/elevation/mdc-elevation';
</style>
