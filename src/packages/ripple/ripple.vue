<template>
  <div
    class="mb-ripple"
    :is="tag"
    v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MDCRipple } from '@material/ripple'
export interface MDCRippleData {
  ripple: MDCRipple | null
}

export default Vue.extend({
  name: 'mdc-ripple',
  props: {
    unbounded: {
      type: Boolean,
      default: false
    },
    tag:{
      type: String,
      default: 'div'
    }
  },
  watch: {
    unbounded(val) {
      this.ripple = val
    }
  },
  data(): MDCRippleData {
    return {
      ripple: null
    }
  },
  mounted() {
    this.ripple = new MDCRipple(this.$el)
  }
})
</script>

<style lang="scss">
@import '@material/ripple/mdc-ripple';
.mb-ripple {
  @include mdc-ripple-surface;
  @include mdc-ripple-radius-bounded;
  @include mdc-states-base-color(black);
  @include mdc-states-hover-opacity(.1);
  @include mdc-states-focus-opacity(.3);
  @include mdc-states-press-opacity(.4);
}
</style>

